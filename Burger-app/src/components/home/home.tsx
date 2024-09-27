import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchInput from '../ui/SearchInput';
import Tabs from './Tabs';
import Button from '../ui/Button';
import { useRouter } from 'expo-router';
import BurgerList from './BurgerList';
import ProductSearch from './ProductSearch';
import { useTabContext } from '../layout/TabContext';

const Homes = () => {
  const router = useRouter();
  const [x, setX] = useState(false);
  const [s, setS] = useState(false);
  const { selectedTab, selectedCategoryName } = useTabContext(); // استخدام selectedCategoryName هنا

  if (x) {
    return <BurgerList />
  }
  
  if (s) {
    return <ProductSearch />;
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>Delicious</Text>
          <Text style={styles.titleText}>burgers for you</Text>
          <SearchInput onSearch={function (text: string): void {
            setS(!s);
          }} />
        </View>
      </View>
      <Tabs />
      <View style={{ marginBottom: 90 }}>
        <Button
          size='large'
          color='red'
          title={ ` View All ${selectedCategoryName} `} // استخدام selectedCategoryName هنا
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
  },
  titleText: {
    fontSize: 40,
    color: 'black',
  },
});

export default Homes;
