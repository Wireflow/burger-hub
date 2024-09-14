import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";


const _layout = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
 initialRouteName="home"
        screenOptions={{
          headerStyle: { height: 100 },
          drawerStyle: { backgroundColor: "green", paddingTop: 32 },
        }}
      >
        <Drawer.Screen
          name="favorite"
          options={{
            title: "my favorite",
            drawerLabel: "my favorite",
            drawerStyle: { borderColor: Colors.dark.background },
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            title: "payment",
            drawerLabel: "payment",
            drawerStyle: { borderColor: Colors.light.background },
          }}
        />
        <Drawer.Screen
          name="order"
          options={{
            title: "order",
            drawerLabel: "my order",
            drawerStyle: { borderColor: Colors.light.background },
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "my profile",
            drawerLabel: "my profile",
            drawerStyle: { borderColor: Colors.light.background },
          }}
        />




    
      </Drawer>
    
    </GestureHandlerRootView>
  );
};

export default _layout;
