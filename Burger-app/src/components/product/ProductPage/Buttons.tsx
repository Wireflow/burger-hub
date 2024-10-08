import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../../ui/Button'
import { router } from 'expo-router'
import ModalDialog from '../Customize/ModalDialog'

const Buttons = () => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  
  };
  return (
    <View style={{height:110,width:250,backgroundColor:'bl ack'}}>
    <View style={styles.scop}>
    <Button size='large' color='white' title='Costomize' onClick={handlePress}/>
  </View>
  <View style={styles.scop}>
    <Button size='large' color='red' title='Add to cart' onClick={(
      

    )=>{
    }}/>
  </View>
  <ModalDialog isPressed={isPressed} handlePress={handlePress}/>
  </View>  )
}

export default Buttons







const styles = StyleSheet.create({
     scop:{height:50,top:-20,marginTop:10}
})