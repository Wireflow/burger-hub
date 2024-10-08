import { useCartStore } from '@/src/store/cart/cartStore';
import { Product } from '@/src/types/product/Product';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListItems = () => {
    const { cart } = useCartStore(state => state);
    const products: Product[] = cart.products;
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>

      {products && products.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={require('@/assets/images/Mask Group.png')} style={styles.image} />
          <View style={styles.details}>
            <View style={styles.desc}>
            <Text style={styles.quantity}>{item.quantity}x</Text>
            <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#F5F5F8',
    height:'auto'
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 10,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: '#AF042C',
    marginTop: 4,
    
  },desc:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:150
  }
});

export default ListItems;