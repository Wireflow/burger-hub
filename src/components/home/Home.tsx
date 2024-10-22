import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import Tabs from './Tabs';
import Button from '../ui/Button';
import { useRouter } from 'expo-router';
import BurgerList from './BurgerList';
import ProductSearch from './ProductSearch';
import { useTabContext } from '../layout/TabContext';
import SearchInput from '../ui/SearchInput'; 
import CartIcon from '../ui/CartIcon';
import { useCartStore } from '@/src/store/cart/cartStore';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useToggleDrawer from '../../hooks/toggleDrwaer';

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
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => toggleDrawer()}>
            <Image source={require("@/assets/icons/menu.png")}/>
          </TouchableOpacity>
          
          <CartIcon
          //@ts-ignore
          itemCount={cart?.totalQuantity} />
        </View>
        <View style={{ width: '90%' }}>
          <Text style={styles.titleText}>Delicious</Text>
          <Text style={styles.titleText}>burgers for you</Text>
          <SearchInput
          //@ts-ignore
            onSearch={(text: any) => {}}
            onClick={() => setS(!s)}
            color="#000"
            backgroundColor="#E0E0E0"
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