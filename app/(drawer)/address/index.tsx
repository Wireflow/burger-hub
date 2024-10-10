import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddressScreen from '@/src/components/address/AddressScreen'
import { router, Stack } from 'expo-router'
import { HeaderBackButton } from "@react-navigation/elements";

const index = () => {
  return (
    <>
  
    <AddressScreen/>

    </>
  )
}

export default index

const styles = StyleSheet.create({})