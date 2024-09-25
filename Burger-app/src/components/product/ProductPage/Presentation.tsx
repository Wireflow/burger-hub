import React from 'react'
import { View } from 'react-native'
import Title from '../../ui/Title'
import Description from '../../ui/Description'
import Price from '../../ui/Price'

const Presentation = () => {
  return (
 <View style={{height:180,width:"70%",display:'flex',justifyContent:'space-around',alignItems:'center',position:'relative',top:-40}}>
      <Title/>
    <Description/>
    <Price/>
 </View>  )
}

export default Presentation