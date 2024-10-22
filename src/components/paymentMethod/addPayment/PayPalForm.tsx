import React from 'react';
import { View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from './InputField'; 
import SubmitButton from './SubmitButton'; 


const paypalSchema = z.object({
  accountName: z.string().min(2, 'accountname invalid'),
  phoneNumber: z.string().min(10, 'Phone Number invalid'),
  email: z.string().email('email invalid'),
});

type PayPalFormValues = z.infer<typeof paypalSchema>;
type PayPalFormProps = {
    onSubmit: (data: PayPalFormValues) => void; 
  };
  const PayPalForm: React.FC<PayPalFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PayPalFormValues>({
    resolver: zodResolver(paypalSchema),
  });

  return (
    <View>
      <InputField
              control={control}
              name="accountName"
              placeholder="accountName"
              error={errors.accountName} keyboardType={undefined}      />
      <InputField
        control={control}
        name="phoneNumber"
        placeholder="phone Number"
        keyboardType="phone-pad"
        error={errors.phoneNumber}
      />
      <InputField
        control={control}
        name="email"
        placeholder="email"
        keyboardType="email-address"
        error={errors.email}
      />
      <SubmitButton onPress={handleSubmit(onSubmit)} title="submit" />
    </View>
  );
};

export default PayPalForm;
