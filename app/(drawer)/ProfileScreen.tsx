import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '@/src/components/profile/Profile'
import Header from '@/src/hooks/Header'

const ProfileScreen = () => {
  return (
    <>
        <Header title='profile'   backgroundColorCode='#f4f6f7'/> 
     <Profile/>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
