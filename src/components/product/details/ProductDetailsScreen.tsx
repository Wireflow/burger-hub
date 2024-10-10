import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import ImageProduct from './ImageProduct';
import Title from '../../ui/Title'; // Title is imported but not used
import Description from '../../ui/Description'; // Description is imported but not used
import Price from '../../ui/Price'; // Price is imported but not used
import Presentation from './Presentation';
import Button from '../../ui/Button'; // Button is imported but not used
import Buttons from './Buttons';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useGetModifiersWithProduct } from '@/src/queries/products/getModifiersWithProduct';
import { HeaderBackButton } from "@react-navigation/elements";
import AddProductFavorite from "@/src/components/product/details/AddProductFavorite";

export const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const numericId = Array.isArray(id) ? Number(id[0]) : Number(id);

  const { data, error, isLoading } = useGetModifiersWithProduct(numericId);
   if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#AF042C" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error loading modifiers: {error.message}</Text>
      </View>
    );
  }
  

  return (
    <>  
       
    <View style={styles.container}>
      {
      data &&
      (  <View style={{ alignItems: 'center',width:'95%',marginHorizontal:'auto' }}>

        
        <ImageProduct imageBase={data?.product.imageUrl || ''} />
        <Presentation
          title={data?.product.name || ''}
          description={data?.product.description || ''}
          price={data?.product.price || undefined}
        />
      </View>)
      }
    
      <Buttons data={data} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop:40
    
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});