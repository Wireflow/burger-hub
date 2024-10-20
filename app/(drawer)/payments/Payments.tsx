import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/src/components/ui/Header";
import PaymentMethod from "@/src/components/order/payment/PaymentMethod";

const Payments = () => {
  return (
    <>
      <Header title="Payments Methods" backgroundColorCode="#FFFFFF" />
      <View style={{ left: 40, height: "100%", top: 10 }}>
        <PaymentMethod />
      </View>
    </>
  );
};

export default Payments;

const styles = StyleSheet.create({});
