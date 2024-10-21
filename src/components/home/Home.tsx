import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Tabs from './Tabs';
import Button from '../ui/Button';
import { useRouter } from 'expo-router';
import BurgerList from './BurgerList';
import { useTabContext } from '../layout/TabContext';
import SearchInput from '../ui/SearchInput';
import CartIcon from '../ui/CartIcon';
import { useCartStore } from '@/src/store/cart/cartStore';
<<<<<<< HEAD
import Header from '../ui/Header';
import { TouchableOpacity } from 'react-native';
import BarUi from '../ui/BarUi';
import BarUI from '../ui/BarUi';
 import CustomDrawerContent from '@/app/(drawer)/CustomDrawerContent';
=======
>>>>>>> origin/main

const Homes: React.FC = () => {
  const { cart } = useCartStore(state => state);
  const router = useRouter();
  const [redirectToBurgerList, setRedirectToBurgerList] = useState(false);
  const { selectedCategoryName } = useTabContext();

  if (redirectToBurgerList) {
     return <BurgerList />;
  }

  return (
<<<<<<< HEAD
    <>
      <View style={styles.container}>

         {/* <HeaderHome/> */}
         <TouchableOpacity>

        <View style={{ width: '90%' }}>
          <Text style={styles.titleText}>Delicious</Text>
          <Text style={styles.titleText}>burgers for you</Text>
          
     
          <SearchInput 
                onSearch={(text) => {}} 
                onClick={() => setS(!s)} 
                color="#000" 
                backgroundColor="#E0E0E0" 
=======
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <CartIcon itemCount={cart?.totalQuantity} />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Delicious</Text>
            <Text style={styles.titleText}>burgers for you</Text>
            <SearchInput
              color="#000" 
              backgroundColor="#E0E0E0" 
>>>>>>> origin/main
            />
          </View>
        </View>
<<<<<<< HEAD
        </TouchableOpacity>

      </View>
      <Tabs />
      <View style={{ marginBottom: 90 }}>
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
=======
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
>>>>>>> origin/main
  );
};

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flexDirection: 'column',
=======
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'space-between', 
  },
  header: {
    flexDirection: 'row',
>>>>>>> origin/main
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginLeft: 25,
    height: 120,
<<<<<<< HEAD
    position: 'relative',
    width:'100%'
=======
    paddingHorizontal: 10,
  },
  titleContainer: {
    width: '90%',
>>>>>>> origin/main
  },
  titleText: {
    fontSize: 40,
    color: 'black',
<<<<<<< HEAD
  },header:{
     height:"30%",
    width:"80%",
    marginTop:20,
    marginBottom:20,
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'black'

  }
=======
    marginBottom: 5,
  },
  buttonContainer: {
    marginBottom: 20,
    paddingHorizontal: 25, 
  },
>>>>>>> origin/main
});

export default Homes;
