import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'; 
import FormInput from '@/src/components/ui/FormInput';
import Button from '@/src/components/ui/Button';
import { VisaSuperVisaSchema, VisaSuperVisaType } from '@/src/types/payment/VisaSuperVisa';
type VisaFormProps = {
    onSubmit: (data: VisaSuperVisaType) => void; 
  };
  
 
const VisaForm: React.FC<VisaFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VisaSuperVisaType>({
    resolver: zodResolver(VisaSuperVisaSchema),
  });

  return (
    <View style={styles.container}>
 
          <FormInput
              style={styles.input}
              control={control}
              name="card_number"
              placeholder="Card Number"
             />
    <FormInput
              style={styles.input}
              control={control}
              name="expire_date"
              placeholder="expiryDate(MM/YY)"
             />
            <FormInput
              style={styles.input}
              control={control}
              name="card_cvc"
              placeholder='CVC'
              keyboardType='numeric'
             />
       <Button title='Add Payment' color='red' size='medium' onClick={handleSubmit(onSubmit)}/>
    </View>
  );
};

export default VisaForm;

const styles = StyleSheet.create({
  input: {
     height:80,
   
  },container:{
    height:350,   }
 
 
});
