
import { PaymentType } from '@/src/store/cart/cartSlice';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../../ui/Button';

interface PaymentMethodSelectorProps {
  setPaymentMethod: (method: PaymentType | null) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({ setPaymentMethod }) => {
  return (
    <View style={{width:'90%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <Text style={styles.title}>chose Payment Methode</Text>
      {[PaymentType.Visa, PaymentType.SuperVisa, PaymentType.PayPal].map((method) => (
        <TouchableOpacity key={method} style={styles.button} onPress={()=>setPaymentMethod(method)} >
          <Button color='white' size='medium' title={method} onClick={()=>{setPaymentMethod(method)}}/> 
          <Text style={styles.buttonText}>     {'>'}</Text>

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
     borderRadius: 5,
    padding: 12,
    marginVertical: 5,
      display:'flex',
    flexDirection:'row',
     alignItems:'center',
       width:'40%',
     },
  buttonText: {
    fontSize: 18,
    color: '#AF042C',
    zIndex:0
  },
});

export default PaymentMethodSelector;
