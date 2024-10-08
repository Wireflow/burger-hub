import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
 import CardItems from './ListItems';
 import { useCartStore } from '@/src/store/cart/cartStore';
import ConnectedPickUp from '../checkout/ConnectedPickUp';
import Proceed from '@/hooks/Proceed';
import { router } from 'expo-router';
import { createOrder } from '@/src/mutations/order/createOrder';
import { useSessionStore } from '@/src/store/useSessionStore';
import { useCustomToast } from '@/src/hooks/useCustomToast';
  

const ConfirmationScreen = () => {
  const {  session,setSession } = useSessionStore();
  const showToast = useCustomToast();
  const { cart,removeCart } = useCartStore(state => state);
  const ComplateOrder = async()=>{
  console.log("im in order configration",cart)
  const order =await createOrder(cart,session?.id);
  console.log("im order in cinfirmation",order); 
  if(order){
    showToast("Order Added  successfully!", { type: "success" });
    router.navigate("/(drawer)/main");
    removeCart();
  }
   
    }

  return (
    <View style={styles.container}>
        
        <CardItems/>
<ConnectedPickUp/>

<Proceed title='Proceed to payment' method={ComplateOrder}/>
    </View>
  );
};

 

export default ConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#F5F5F8',
    
  },
  title: {
    fontSize: 33,
     marginBottom: 40,
     fontWeight:'bold',
     marginTop:20
     
    },
   
});
