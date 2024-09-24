import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageProduct from './ImageProduct'
import Title from '../../ui/Title'
import Description from '../../ui/Description'
import Price from '../../ui/Price'
import Presentation from './Presentation'
import Button from '../../ui/Button'
import Buttons from './Buttons'

export const ProductPage = () => {
  return (
    <View style={styles.container}> 
    <ImageProduct/>
  <Presentation/>
<Buttons/>
  
     </View>
  )
}

const styles = StyleSheet.create({
    container:{height:'100%',width:'100%',backgroundColor:'#F6F6F9',display:'flex',alignItems:'center'},
 })
