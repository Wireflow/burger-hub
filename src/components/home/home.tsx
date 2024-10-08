import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
 import Tabs from './Tabs';
import Button from '../ui/Button';
import { useRouter } from 'expo-router';
import BurgerList from './BurgerList';
import ProductSearch from './ProductSearch';
import { useTabContext } from '../layout/TabContext';
import SearchInput from '../ui/SearchInput';
import CartIcon from '../ui/CartIcon';
import { useCartStore } from '@/src/store/cart/cartStore';

const Homes = () => {
   const { getTotalProducts } = useCartStore(state => state);
   const totalProducts = getTotalProducts();


  const router = useRouter();
  const [x, setX] = useState(false);
  const [s, setS] = useState(false);
  const { selectedTab, selectedCategoryName } = useTabContext(); 

  if (x) {
    return <BurgerList />
  }
  
  if (s) {
    return <ProductSearch />;
  }

  return (
    <>
      <View style={styles.container}>
    
        <View style={{width:'80%'}}>
          <Text style={styles.titleText}>Delicious</Text>
          <Text style={styles.titleText}>burgers for you</Text>
           <SearchInput onSearch={function (text: string): void {
            setS(!s);
          }} />
        </View>
  <View style={{height:50,width:50}}>
               <CartIcon itemCount={totalProducts}/>

      </View>
      </View>
      <Tabs />
      <View style={{ marginBottom: 10 }}>
        <Button
          size='large'
          color='red'
          title={ ` View All ${selectedCategoryName} `} 
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginLeft: 25,
    height:120,
    position:'relative'  },
  titleText: {
    fontSize: 30,
    color: 'black',
  },  containeer: {
    position: 'absolute',
    marginRight: 20, 
    right:20,
    top:20
   },
  badge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: '#AF042C',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Homes;
