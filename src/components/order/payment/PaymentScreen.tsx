import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import PaymentMethod from "./PaymentMethod";
import Proceed from "@/hooks/Proceed";
import { router } from "expo-router";
const { width } = Dimensions.get("window");

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <PaymentMethod />
      <Proceed
        title="Proceed to payment"
        method={() => router.navigate("/(drawer)/order/orderConfirmation")}
      />
 
    </View>
  );
};
export default PaymentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "8%",
    backgroundColor: "#f9f9f9",

  },
  title: {
    fontSize: 33,
    marginBottom: "5%",
    fontWeight: "bold",
  },
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ddd",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selectedCard: {
    borderColor: "#000",
    backgroundColor: "#3C2F2F",
  },
  brand: {
    fontSize: 18,
    fontWeight: "600",
  },
  type: {
    fontSize: 14,
    color: "#666",
  },
  lastFour: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  radioButton: {
    position: "absolute",
    right: 10,
    top: 30,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
});
