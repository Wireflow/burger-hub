import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { router, Stack } from "expo-router";
import ListProduct from "@/src/components/order/cart/ListProduct";

const Cart = () => {
 
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
        
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Cart</Text>
            </View>
          ),
        }}
      />
      <ListProduct />
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

export default Cart;