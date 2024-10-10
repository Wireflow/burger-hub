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

const Homes: React.FC = () => {
  const { cart } = useCartStore(state => state);
 
  const router = useRouter();
  const [x, setX] = useState(false);
  const [s, setS] = useState(false);
  const { selectedTab, selectedCategoryName } = useTabContext();

  if (x) {
    return <BurgerList />;
  }
  
  if (s) {
    return <ProductSearch />;
  }

  return (
    <>
      <View style={styles.container}>
        <CartIcon itemCount={cart?.totalQuantity} />
        <View style={{ width: '90%' }}>
          <Text style={styles.titleText}>Delicious</Text>
          <Text style={styles.titleText}>burgers for you</Text>
          
     
          <SearchInput 
                onSearch={(text) => {}} 
                onClick={() => setS(!s)} 
                color="#000" 
                backgroundColor="#E0E0E0" 
            />
        </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginLeft: 25,
    height: 120,
    position: 'relative'
  },
  titleText: {
    fontSize: 30,
    color: 'black',
  },
});

export default Homes;