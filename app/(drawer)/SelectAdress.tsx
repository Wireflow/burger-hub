import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
<<<<<<< HEAD:Burger-app/app/(drawer)/Payment.tsx
import { HeaderBackButton } from "@react-navigation/elements";
import { router, Stack } from "expo-router";
 import CheckOutScreen from "@/src/components/order/checkout/CheckOutScreen";
import PaymentScreen from "@/src/components/order/payment/PaymentScreen";
import Header from "@/src/components/ui/Header";

const Payment = () => {
  const [isPressed, setIsPressed] = useState(false);
=======
 import {  Stack } from "expo-router";
import AddressScreen from "@/src/components/order/Addresses/AddressScreen";
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:app/(drawer)/SelectAdress.tsx

const SelectAdress = () => {
 
  return (
    <>
<<<<<<< HEAD:Burger-app/app/(drawer)/Payment.tsx
    <Header title="Payment Methods" backgroundColorCode="#ffffff"/>
      <PaymentScreen />
=======
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'white' },
          headerTitleAlign:'center',
     
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Select Address</Text>
            </View>
          ),
        }}
      />
      <AddressScreen />
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:app/(drawer)/SelectAdress.tsx
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

export default SelectAdress;