import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import twrnc from "twrnc"
const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={twrnc`bg-blue-500`}>signIn</Text>
      <Link href="/favorite" style={{color:"blue"}}>go to Main</Link>
   
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    }
})