import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { router, Stack } from "expo-router";
 import CheckOutScreen from "@/src/components/order/checkout/CheckOutScreen";
import PaymentScreen from "@/src/components/order/payment/PaymentScreen";

const Payment = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
 
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Payment</Text>
            </View>
          ),
        }}
      />
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