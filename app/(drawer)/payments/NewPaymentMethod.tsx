import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/src/components/ui/Header";
 import UserPayment from "@/src/components/paymentMethod/addPayment/UserPayment";
import { Stack } from "expo-router";
 
const NewPaymentMethod = () => {
  return (
    <>
    <Stack screenOptions={{headerShown:false}}/>
      <Header title="New Payment   " backgroundColorCode="#F2F2F2" />
       <UserPayment />

     </>
  );
};

export default NewPaymentMethod;

const styles = StyleSheet.create({});
