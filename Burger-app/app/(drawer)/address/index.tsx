import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddressScreen from '@/src/components/address/AddressScreen'
import { router, Stack } from 'expo-router'
import { HeaderBackButton } from "@react-navigation/elements";

const index = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle:{ backgroundColor:'#F6F6F9'},
          headerLeft: () => (
            <HeaderBackButton onPress={() => router.back()} />
          ),
          title: "address",
          headerShown:true
        }}
      />
    <AddressScreen/>

    </>
  )
}

export default index

const styles = StyleSheet.create({})