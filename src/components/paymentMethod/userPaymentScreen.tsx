import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../ui/Button';
import UserPayment from './addPayment/UserPayment';
import { useGetAllPaymentUser } from '@/src/queries/payment/getAllPaymentUser';
import { useSessionStore } from '@/src/store/useSessionStore';
import LoadingIndicator from './showPayment/LoadingIndicator';
import ErrorText from './showPayment/ErrorText';
import ConnectedCardWithSwipe from './showPayment/ConnectedCardWithSwipe';
import { router, useNavigation } from 'expo-router';

const UserPaymentScreen = () => {
  const { session } = useSessionStore();
  const userId = session?.id;
 
  const {
    data: paymentMethods,
    error: paymentError,
    isLoading: paymentLoading,
    refetch,
    isFetched
  } = useGetAllPaymentUser(userId as string);

 
  if (paymentLoading) {
    return <LoadingIndicator />;
  }

  if (paymentError) {
    return <ErrorText message={paymentError.message} />;
  }
useEffect(()=>{
  refetch()
})

  return (
    <View style={styles.container}>

      { isFetched && (paymentMethods ? (
        <ConnectedCardWithSwipe refetch={refetch} paymentMethods={paymentMethods} />
      ) : null)}
      <Button
        size='large'
        color='red'
        title='Add payment'
        onClick={() => { 
        router.push('/payments/NewPaymentMethod')
         }}
      />
    </View>
  );
};

export default UserPaymentScreen;

const styles = StyleSheet.create({
  container: {
     padding: '5%',
    backgroundColor: '#F2F2F2',
    height:'80%'
  },
});