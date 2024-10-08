import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
 import { useCartStore } from '@/src/store/cart/cartStore';
import { router } from 'expo-router';
import Button from '@/src/components/ui/Button';
 type Props ={
    title:string;
     method:()=>void;
 }
const Proceed = ({title,method}:Props) => {
    const { totalPrice } = useCartStore(state => state);
    const Total = totalPrice();
  return (
    <View style={styles.container}>

    <View style={styles.totalContainer}>
     <Text style={styles.totalLabel}>Total</Text>
     <Text style={styles.totalAmount}>${Total}</Text>
 </View>

      <Button title={title} color='red' size='large' onClick={method}/>
</View>  )
}
const styles = StyleSheet.create({
    container:{height:130,
         width:'100%',
          position:'absolute',
         bottom:20,
         left:'10%'
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    totalLabel: {
        fontSize: 22,
        fontWeight: '600',
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: '600',
    },
});




export default Proceed