import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useGetProductsByCategoryId } from "../../queries/products/getProductsByCategoryId";
import SearchInput from '../ui/SearchInput';
import { useTabContext } from '../layout/TabContext';
import { Redirect } from "expo-router";
import Buttonout from '../ui/Buttonout';
import CardWrapper from '../ui/card/CardWrapper';
import Header from '../ui/Header';
import Homes from './Home';
import { router } from 'expo-router';

const BurgerList = () => {
  const { selectedTab,  selectedCategoryName } = useTabContext();
  const { data: productsByCategory, isLoading: isLoadingProducts } = useGetProductsByCategoryId(selectedTab || 0);
  return (
    <View style={styles.container}>
     
      <View style={styles.searchContainer}>
        <Buttonout onPress={()=>{
          router.push("/(drawer)/main"); 
        }} />
        <SearchInput
         color="#000" 
         backgroundColor="#F5F5F8" 
         />
      </View>
      <Text style={styles.t}>Our {selectedCategoryName}s</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
        {selectedTab !== null && productsByCategory && productsByCategory.length > 0 ? (
          productsByCategory.map(product => (
            <CardWrapper
              key={product.id}
              imageSource={{ uri: product.imageUrl || 'http://example.com/default-image.jpg' }}
              title={product.name || "Product Name"}
              price={`$${product.price?.toFixed(2)}`}
              height={190}
              width={160}
              id={product?.id}
            />
          ))
        ) : (
          <Text style={styles.contentText}>No products found for this category.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F8',
  },
  searchContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F5F5F8',  
  },
  content: {
    padding: 10,
    flexDirection: 'row', 
  },
  contentText: {
    fontSize: 24,
    textAlign: 'center',
  },
  t:{
    textAlign: 'center',
    fontSize: 30,
  }
});

export default BurgerList;