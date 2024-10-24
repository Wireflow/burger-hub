
import React from 'react';
import { StyleSheet, View } from 'react-native'; 
import { ActivityIndicator } from 'react-native-paper';
import { PayPalFormValues, PaypalType } from '@/src/types/payment/PayPal';
import { VisaSuperVisaFormValues, VisaSuperVisaType } from '@/src/types/payment/VisaSuperVisa';
import PayPalForm from './PaymentsForms/PayPalForm';
import VisaForm from './PaymentsForms/VisaForm';

interface PaymentFormProps {
  paymentMethod: string | null;
   loading:boolean;
  handleSubmitPyPal:(data: PaypalType) => void;
  handleSubmitVisaSuperVisa:(data:VisaSuperVisaType)=>void;
 }

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentMethod, handleSubmitPyPal,loading ,handleSubmitVisaSuperVisa }) => {
  return (
    <View>

{loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#AF042C" />
        </View>
      )}
      {paymentMethod === 'Visa' || paymentMethod === 'Super Visa' ? (
        <VisaForm onSubmit={handleSubmitVisaSuperVisa}  />
      ) : paymentMethod === 'PayPal' ? (
        <PayPalForm onSubmit={handleSubmitPyPal} />
      ) : null}
    </View>
  );
};

export default PaymentForm;
const styles =StyleSheet.create({
  loaderContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -50,
    marginTop: -50,
    height: 100,
    width: 100,
     opacity: 0.4,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
})