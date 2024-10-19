import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
 import PaymentMethod from './PaymentMethod';
import Proceed from '@/hooks/Proceed';
import { router } from 'expo-router';

const PaymentScreen = () => {
   

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
       <PaymentMethod/>
       <Proceed title='Proceed to payment' method={()=>router.navigate('/(drawer)/order/orderConfirmation')}/>
       </View>
  );
};
export default PaymentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD:Burger-app/src/components/order/payment/PaymentScreen.tsx
    padding: 40,
    backgroundColor: 'white',
=======
    padding: '8%',
    backgroundColor: '#f9f9f9',
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:src/components/order/payment/PaymentScreen.tsx
    
  },
  title: {
    fontSize: 33,
     marginBottom: '5%',
     fontWeight:'bold',     
    },
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  selectedCard: {
    borderColor: '#000',
    backgroundColor: '#3C2F2F',
  },
  brand: {
    fontSize: 18,
    fontWeight: '600',
  },
  type: {
    fontSize: 14,
    color: '#666',
  },
  lastFour: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  radioButton: {
    position: 'absolute',
    right: 10,
    top: 30,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',

  },
});

 

