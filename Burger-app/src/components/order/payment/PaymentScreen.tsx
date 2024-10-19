import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ConnectedProceed from './ConnectedProceed';
import PaymentMethod from './PaymentMethod';

const PaymentScreen = () => {
   

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
       <PaymentMethod/>
      <ConnectedProceed/>
    </View>
  );
};
export default PaymentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white',
    
  },
  title: {
    fontSize: 33,
     marginBottom: 40,
     fontWeight:'bold',
     marginTop:20
     
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

 

