import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/src/hooks/Header";
import PaymentMethod from "@/src/components/order/payment/PaymentMethod";
import UserPaymentScreen from "@/src/components/order/payment/add/userPaymentScreen";

const Payments = () => {
  return (
    <>
      <Header title="Payments Methods" backgroundColorCode="#FFFFFF" />
    
      <UserPaymentScreen/>
     
    </>
  );
};

export default Payments;

const styles = StyleSheet.create({});
