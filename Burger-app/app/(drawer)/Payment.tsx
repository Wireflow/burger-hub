import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { router, Stack } from "expo-router";
 import CheckOutScreen from "@/src/components/order/checkout/CheckOutScreen";
import PaymentScreen from "@/src/components/order/payment/PaymentScreen";
import Header from "@/src/components/ui/Header";

const Payment = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
    <Header title="Payment Methods" backgroundColorCode="#ffffff"/>
      <PaymentScreen />
    </>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,  
    fontWeight: 'bold',  
  },
});

export default Payment;