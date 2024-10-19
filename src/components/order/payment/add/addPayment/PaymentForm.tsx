
import React from 'react';
import { View } from 'react-native';
import VisaForm from './VisaForm';
import PayPalForm from './PayPalForm';

interface PaymentFormProps {
  paymentMethod: string | null;
  onSubmit: (data: any) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentMethod, onSubmit }) => {
  return (
    <View>
      {paymentMethod === 'Visa' || paymentMethod === 'Super Visa' ? (
        <VisaForm onSubmit={onSubmit} />
      ) : paymentMethod === 'PayPal' ? (
        <PayPalForm onSubmit={onSubmit} />
      ) : null}
    </View>
  );
};

export default PaymentForm;
