import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import Tabs from './Tabs';
import Button from '../ui/Button';
import { router } from 'expo-router';
import { useTabContext } from '../layout/TabContext';
import SearchInput from '../ui/SearchInput';
import { usesearchStore } from '@/src/store/search/searchStore';
import { removeTeailingS } from '@/hooks/removeTeailingS';

const Homes: React.FC = () => {
  const { selectedCategoryName } = useTabContext();
  const {  setSearchTerm, clearSearchTerm } = usesearchStore();
  
 

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
           <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Delicious</Text>
            <Text style={styles.titleText}>burgers for you</Text>
            <SearchInput
            
              color="#000" 
              backgroundColor="#E0E0E0" 
            />
          </View>
        </View>
        <Tabs />
        <View style={styles.buttonContainer}>
          <Button
            size='large'
            color='red'
            title={` View All ${selectedCategoryName} `} 
            onClick={ async() => {
              clearSearchTerm()
              let title = await removeTeailingS(selectedCategoryName)
              console.log(title,"im title after slice")
              setSearchTerm(title);
              router.push(`/product/search`);

             }}
          />
        </View>
      </View>
      <Tabs />
      <View style={{ marginBottom: 40 }}>
        <Button
          size='large'
          color='red'
          title={` View All ${selectedCategoryName} `}
          onClick={() => {
            setX(!x);
            console.log(x);
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginLeft: 25,
    height: 120,
    position: 'relative',
    gap:20
  },
  titleText: {
    fontSize: 34,
    color: 'black',
  },
  header: {
    top:30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    paddingBottom: 16,
    
    
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Homes;