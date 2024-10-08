import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HeaderBackButton } from "@react-navigation/elements";

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack >
        <Stack.Screen name="cart"         options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
        
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Cart</Text>
            </View>
          ),
        }}/>
        <Stack.Screen name="checkOut"         options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
        
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Checkout</Text>
            </View>
          ),
        }}/>
        <Stack.Screen name="orderConfirmation"         options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
        
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Order  Confirmation</Text>
            </View>
          ),
        }}/>
        <Stack.Screen name="payment"         options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
        
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Checkout</Text>
            </View>
          ),
        }}/>



      </Stack>
    </GestureHandlerRootView>
  );
};

export default _layout;



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