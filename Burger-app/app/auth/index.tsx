import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import SignIn from '@/src/auth/SignIn'
import { Stack } from 'expo-router'


export default function index() {
  return (
  <>
  <Stack.Screen options={{headerShown:false}}/>
  <SignIn />
 
  </>
  )
}



const styles = StyleSheet.create({})