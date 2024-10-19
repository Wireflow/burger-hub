import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddressScreen from '@/src/components/address/AddressScreen'
import { router, Stack } from 'expo-router'
import { HeaderBackButton } from "@react-navigation/elements";
import Header from '@/src/components/ui/Header';

const index = () => {
  return (
    <>
  <Header title='addresses' backgroundColorCode='#f4f6f7'/>
    <AddressScreen/>

    </>
  )
}

export default index

const styles = StyleSheet.create({})