import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>signIn</Text>
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