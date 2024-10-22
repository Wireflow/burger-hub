import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Tabs from './Tabs';
import Button from '../ui/Button';
import { useRouter } from 'expo-router';
import BurgerList from './BurgerList';
import ProductSearch from './ProductSearch';
import { useTabContext } from '../layout/TabContext';
import SearchInput from '../ui/SearchInput'; 
import CartIcon from '../ui/CartIcon';
import { useCartStore } from '@/src/store/cart/cartStore';
import useToggleDrawer from '@/src/hooks/toggleDrwaer';

const Homes: React.FC = () => {
  const { cart } = useCartStore(state => state);
  const router = useRouter();
  const [x, setX] = useState(false);
  const [s, setS] = useState(false);
  const { selectedTab, selectedCategoryName } = useTabContext();
  const toggleDrawer = useToggleDrawer();

  if (x) {
    return <BurgerList />;
  }

  if (s) {
    return <ProductSearch />;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <CartIcon  />
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
            onClick={() => {
              setRedirectToBurgerList(!redirectToBurgerList);
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'space-between', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginLeft: 25,
    height: 120,
    paddingHorizontal: 10,
  },
  titleContainer: {
    width: '90%',
  },
  titleText: {
    fontSize: 34,
    color: 'black',
    marginBottom: 5,
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