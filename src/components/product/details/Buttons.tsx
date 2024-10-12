import React, {  useState } from 'react'
import {  StyleSheet,View } from 'react-native'
import Button from '../../ui/Button'
import { useCartStore } from '@/src/store/cart/cartStore'
import PresentationCustomize from './Customize/PresentationOptions'
import { router } from 'expo-router'
import { useCustomToast } from '@/src/hooks/useCustomToast'
  type props ={
  data?:any
}
const Buttons = ({data}:props) => {
  const showToast = useCustomToast();

  const {addProduct,cart,getTotalProducts} = useCartStore(state => state);
  const [isPressed, setIsPressed] = useState(false);
  const handlePress =async () => {
    setIsPressed(!isPressed);
// router.navigate('/(screen)/cart')
  };
  const handleAddProduct =async () => {
    console.log("im button and cart store before",cart)
    const x =await addProduct({
      id: data?.product?.id,
      imageUrl: data?.product?.imageUrl,
      name: data?.product?.name,
      price: data?.product?.price,
      quantity: 1,
      options: []
    });
   await getTotalProducts();
    showToast("Product has been added successfully!", { type: "success" });
    router.back();
  };
   return (
    <View style={{height:100,width:350,margin:'auto'}}>
    <View style={styles.scop}>
    <Button size='large' color='white' title='Costomize' onClick={handlePress}/>
  </View>
  <View style={styles.scop}>
    <Button size='large' color='red' title='Add to cart' onClick={handleAddProduct}/>
  </View>
  <PresentationCustomize data={data}  isPressed={isPressed} handlePress={handlePress} />
  </View>  )
}
export default Buttons
const styles = StyleSheet.create({
     scop:{height:50,marginTop:20}
})