import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HeaderBackButton } from "@react-navigation/elements";

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{headerShown:false}} >
        <Stack.Screen name="cart"         options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
        
          headerLeft: () => (
            <HeaderBackButton label="Cancel" onPress={() => router.back()} />
          ),
          title: "Cart",
          headerShown:true

        }}/>
        <Stack.Screen name="checkOut"         options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
        
          headerLeft: () => (
            <HeaderBackButton label="Cancel" onPress={() => router.back()} />
          ),
          title: "Checkout",
          headerShown:true
        }}/>
        <Stack.Screen name="orderConfirmation"         options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
          title:'Order Confirmation',
          headerShown:true,
          headerLeft: () => (
            <></>
          ),

          
        }}/>
        <Stack.Screen name="payment"         options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
          title:'Checkout',
          headerLeft: () => (
            <HeaderBackButton label="Cancel" onPress={() => router.back()} />
          ),
          headerShown:true

 
        }}/>

  <Stack.Screen name="PaymentUser"         options={{
          headerStyle: { backgroundColor: '#F6F6F9' },
          headerTitleAlign:'center',
          title:'Checkout',
          headerLeft: () => (
            <HeaderBackButton label="Cancel" onPress={() => router.back()} />
          ),
          headerShown:true

 
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