import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { router, Stack } from "expo-router";
import ConfirmationScreen from "@/src/components/order/confirmation/ConfirmationScreen";
 
const OrderConfirmation = () => {
 
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#F5F5F8' },
          headerTitleAlign:'center',
 
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Order Confirmation</Text>
            </View>
          ),
 
        }}
      />
      <ConfirmationScreen />
    </>
  );
};


export default OrderConfirmation;









const styles = StyleSheet.create({
    headerTitleContainer: {
       alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontSize: 20,  
      fontWeight: 'bold',  
    },
  });
  