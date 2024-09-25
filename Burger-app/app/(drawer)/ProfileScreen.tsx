import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/ui/Button'
import Formaddress from '@/src/components/address/Formaddress'




const ProfileScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false); 

  const toggleModalVisibility = () => { 
		setModalVisible(!isModalVisible); 
	}; 
  return (
    <>
        <Button  color='red'  size='large' title="Add Address"  onClick={toggleModalVisibility}/>
  <Formaddress open={isModalVisible} setOpen={toggleModalVisibility}/>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
 container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 }
})