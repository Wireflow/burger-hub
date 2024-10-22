
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PaymentMethodSelectorProps {
  setPaymentMethod: (method: string | null) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({ setPaymentMethod }) => {
  return (
    <View>
      <Text style={styles.title}>chose Payment Methode</Text>
      {['Visa', 'Super Visa', 'PayPal'].map((method) => (
        <TouchableOpacity key={method} style={styles.button} onPress={() => setPaymentMethod(method)}>
          <Text style={styles.buttonText}>                        {method}                               {'>'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default PaymentMethodSelector;
