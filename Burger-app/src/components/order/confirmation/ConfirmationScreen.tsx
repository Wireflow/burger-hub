import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ConnectedProceed from './ConnectedProceed';
import CardItems from './ListItems';
import ConnectedAddress from './Mk';
import { useCartStore } from '@/src/store/cart/cartStore';
import Mk from './Mk';
 

const ConfirmationScreen = () => {
    const { cart } = useCartStore(state => state);
    const addressId =cart.addressId;
   

  return (
    <View style={styles.container}>
        
        <CardItems/>


 <Mk/>
        <ConnectedProceed/>
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
