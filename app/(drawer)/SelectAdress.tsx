import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
 import {  Stack } from "expo-router";
import AddressScreen from "@/src/components/order/Addresses/AddressScreen";

const SelectAdress = () => {
 
  return (
    <>
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