import React from 'react';
import { View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from './InputField'; 
import SubmitButton from './SubmitButton'; 


const visaSchema = z.object({
  cardNumber: z.string().length(16, 'card Number you must be 16'),
  expiryDate: z.string().min(5, 'expireDate invaild'),
  cvv: z.string().length(3, 'CVV you must be 3'),
});
type VisaFormProps = {
    onSubmit: (data: VisaFormValues) => void; 
  };
  
type VisaFormValues = z.infer<typeof visaSchema>;

const VisaForm: React.FC<VisaFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VisaFormValues>({
    resolver: zodResolver(visaSchema),
  });

  return (
    <View>
      <InputField
        control={control}
        name="cardNumber"
        placeholder="card Number"
        keyboardType="numeric"
        error={errors.cardNumber}
      />
      <InputField
              control={control}
              name="expiryDate"
              placeholder="expiryDate(MM/YY)"
              error={errors.expiryDate} keyboardType={undefined}      />
      <InputField
        control={control}
        name="cvv"
        placeholder="CVC"
        keyboardType="numeric"
        error={errors.cvv}
      />
      <SubmitButton onPress={handleSubmit(onSubmit)} title="submit" />
    </View>
  );
};

export default VisaForm;
