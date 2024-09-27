import { useCartStore } from '@/src/store/cart/cartStore';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
type Product = {
    name: string;
    price: number;
    quantity: number;
    id:number
};
type Props = {
    item: Product;
    rowMap: any;
};
const ItemsHidden = ({item,rowMap}:Props) => {
    const { removeProduct } = useCartStore(state => state);

  return (
    <View style={styles.hiddenContainer}>
    <TouchableOpacity style={styles.hiddenText} >
      <AntDesign name="hearto" size={17} color="#f0f0f0" />

    </TouchableOpacity>
    <TouchableOpacity style={styles.hiddenText} onPress={()=>removeProduct(item.id)}>
      <MaterialIcons name="delete-outline" size={20} color="#f0f0f0" />

    </TouchableOpacity>
  </View>  )
}
export default ItemsHidden;
const styles = StyleSheet.create({
 
    
    hiddenContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 70,
        padding: 15,
        width:'30%',
        position:'relative',
         top:12,
         zIndex:99,
         left:'220%',
        },
    hiddenText: {
      backgroundColor:'#DF2C2C',
       borderRadius:50,
      height:'80%',
      width:'45%',
      alignItems:'center',
      justifyContent:'center'
    },
});