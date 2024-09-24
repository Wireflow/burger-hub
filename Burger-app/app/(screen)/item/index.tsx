import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { router, Stack } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon
import {  ProductPage } from "@/src/components/product/ProductPage/ProductPage";

const OrderCustomer = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
    // You can add any additional logic here (e.g., navigating back)
    // router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle:{ backgroundColor:'#F6F6F9'},
          headerLeft: () => (
            <HeaderBackButton label="Cancel" onPress={() => router.back()} />
          ),
          title: "",
         
        }}
      />
     <ProductPage/>
    </>
  );
};

const styles = StyleSheet.create({
 
  buttonDefault: {
    backgroundColor: 'white',
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'black', // Default text color
    marginLeft: 5, // Space between icon and text
  },
});

export default OrderCustomer;