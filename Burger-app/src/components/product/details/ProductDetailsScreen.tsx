import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageProduct from './ImageProduct'
import Title from '../../ui/Title'
import Description from '../../ui/Description'
import Price from '../../ui/Price'
import Presentation from './Presentation'
import Button from '../../ui/Button'
import Buttons from './Buttons'
import { useLocalSearchParams } from 'expo-router'
import { useGetModifiersWithProduct } from '@/src/queries/products/getModifiersWithProduct'
import { ActivityIndicator } from 'react-native-paper'
 import SkeletonContent from 'react-native-skeleton-content'

export const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const { data, error, isLoading } = useGetModifiersWithProduct(1);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
       <ActivityIndicator size="large" color='#AF042C' />
    </View>
    );
  }

  if (error) {
    return (
      <View >
        <Text>Error loading modifiers: {error.message}</Text>
      </View>
    );
  }

  // console.log("Fetched modifiers:", data?.options[1].modifierOption);
 


  return (
   <View style={styles.container} > 
   <View style={{alignItems:'center'}}> 
     <ImageProduct imageBase ={data?.product.imageUrl || ""}/> 
       <Presentation title={data?.product.name || ''} description={data?.product.description || ''} price={data?.product.price || undefined }/> 
  </View>
      <Buttons data={data}/> 
  
    </View>
 
     
  )
}

const styles = StyleSheet.create({
    container:{height:'100%',width:'100%',backgroundColor:'#F6F6F9',display:'flex',alignItems:'center',justifyContent:'space-around'},
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  
 })
