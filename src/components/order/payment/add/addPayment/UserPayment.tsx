// UserPayment.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSessionStore } from '../../../../../store/useSessionStore';
import { useRouter } from 'expo-router';
import { useAddPaymentMethod } from '../../../../../queries/products/useAddPaymentMethod';
import { useAddPayPalPaymentMethod } from '../../../../../queries/products/useAddPaymentMethodpa';
import PaymentMethodSelector from './PaymentMethodSelector';
import PaymentForm from './PaymentForm';

const UserPayment: React.FC = () => {
  const { session } = useSessionStore();
  const userId = session?.id;
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const router = useRouter();
  const addPaymentMethod = useAddPaymentMethod();
  const addPayPalPaymentMethod = useAddPayPalPaymentMethod();

  const handleSubmit = async (data: any) => {
    if (!userId) return console.error("error");

    const paymentData = paymentMethod === 'PayPal' 
      ? {
          user_id: userId,
          method_type: "PayPal",
          account_name: data.accountName,
          phone_number: data.phoneNumber,
          email: data.email,
        }
      : {
          user_id: userId,
          method_type: paymentMethod as "Visa" | "Super Visa",
          card_number: data.cardNumber,
          expire_date: data.expiryDate,
          card_cvc: data.cvv,
        };

    const paymentAction = paymentMethod === 'PayPal' 
      ? addPayPalPaymentMethod.mutateAsync 
      : addPaymentMethod.mutateAsync;

    try {
      await paymentAction(paymentData);
      router.replace("/(drawer)/order/PaymentUser");
    } catch (error) {
      console.error( error);
    }
  };

  return (
    <View style={styles.container}>
      {paymentMethod === null ? (
        <PaymentMethodSelector setPaymentMethod={setPaymentMethod} />
      ) : (
        <>
          <Text style={styles.subtitle}>enter details of{paymentMethod}:</Text>
          <PaymentForm paymentMethod={paymentMethod} onSubmit={handleSubmit} />
          <TouchableOpacity style={styles.backButton} onPress={() => setPaymentMethod(null)}>
            <Text style={styles.buttonText}>return to chose paymentMethod</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default UserPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 15,
    color: '#555',
  },
  backButton: {
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#AF042C',
    
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
