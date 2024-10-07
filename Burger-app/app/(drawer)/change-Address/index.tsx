import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSessionStore } from "@/src/store/useSessionStore";
import { addressChane } from "@/src/mutations/user/changeAddress";
import AddressChangeScreen from "@/src/components/address/ChangeAddressScreen";
import { HeaderBackButton } from "@react-navigation/elements";
import { router, Stack } from "expo-router";

const index = () => {
  return (
  <>
    <Stack.Screen
        options={{
          headerStyle:{ backgroundColor:'#F6F6F9'},
          headerLeft: () => (
            <HeaderBackButton onPress={() => router.back()} />
          ),
          title: "Address changing",
          headerShown:true
        }}
      />
       <AddressChangeScreen />
  </>
 );
};

export default index;

const styles = StyleSheet.create({});
