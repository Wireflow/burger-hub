import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import twrnc from "twrnc"
import { GetUser, useGetUser } from '../queries/user/useGetallUsers'
import { Users } from '../types/schema/user'
import { userSchemaType } from '../types/validations/user'
import { address } from '../types/schema/address'
import { createUser } from '../mutations/user/createUser'
const SignIn = () => {
const {data:users}=useGetUser();

  return (
    <View style={styles.container}>
      <Text style={twrnc`bg-blue-500`}>signIn</Text>
      <Link href="/favorite" style={{color:"blue"}}>go to Main</Link>
      <Text>
    {
  JSON.stringify(users)
    }
      </Text>
   
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