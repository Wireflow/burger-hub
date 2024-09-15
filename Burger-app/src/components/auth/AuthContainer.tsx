import { Image, StyleSheet, View } from "react-native"
import Tabs from "./Tabs"
import React from 'react'
 
const AuthContainer = () => {
  return (
    <> 
    <View style={styles.container}>
        <View style={styles.logo}>
        <Image
                source={require('@/assets/images/logo.png')} // Adjust the path as necessary
                style={styles.image}
                resizeMode="contain" // or "cover", "stretch", etc.
            />
        </View> 
    </View>
    <Tabs /> 
    </>
   )
}
const styles = StyleSheet.create({

    container:{
        height:350,
        backgroundColor:'#FFFFFF',
        width:414,
        borderRadius:15,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8
        },
        shadowOpacity:0.1,
        shadowRadius: 4,
        display:'flex',
        justifyContent:"space-between",
        alignItems:'center'


    },
    logo:{
        marginTop:'15%',
         alignItems:'center',
        justifyContent:'flex-start'
    },  
    image: {
        width: 150, 
        height: 150, 
    },

})
export default AuthContainer
 