import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../ui/Button';
import PaymentMethodsScreen from './showPayment/PaymentMethodsScreen';
import UserPayment from './addPayment/UserPayment';

const UserPaymentScreen = () => {
  const [showUserPayment, setShowUserPayment] = useState(false);
  
  if (showUserPayment) {
    return <UserPayment />; 
  }

  return (
    <View style={styles.container}>

        <PaymentMethodsScreen />
      <Button
        size='large'
        color='red'
        title='Add payment'
        onClick={() => {
          setShowUserPayment(!showUserPayment);
        }}
      />
    </View>
  );
};

export default UserPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '8%',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 33,
    marginBottom: '5%',
    fontWeight: 'bold',
  },
  // Other styles...
});
