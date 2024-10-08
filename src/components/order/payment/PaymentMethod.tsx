import { useCartStore } from '@/src/store/cart/cartStore';
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function PaymentMethod() {
    const {setPaymentId} = useCartStore()
    const [selectedMethod, setSelectedMethod] = useState(1);
const handleMethod = (id:number)=>{
    setSelectedMethod(id);
    setPaymentId(id)
}
  const paymentMethods = [
    {
      id: 1,
      brand: 'mastercard',
      lastFour: '0505',
      type: 'Credit card',
    },
    {
      id: 2,
      brand: 'visa',
      lastFour: '0505',
      type: 'Debit card',
     },
  ];
  return (
<View>

<Text style={styles.title}>Payment Method</Text>

{paymentMethods.map((method) => (
  <TouchableOpacity
    key={method.id}
    style={[
      styles.card,
      selectedMethod === method.id ? styles.selectedCard : {},
    ]}
    onPress={() => handleMethod(method.id)}
  >
    {method.brand == 'visa' ? <Image source={require('@/assets/icons/visa.png')} style={{height:40,width:70}}/> :<Image source={require('@/assets/icons/mastercard.png')} style={{height:40,width:70}}/> }  
      <View style={{width:'70%',marginLeft:15}}> 
      <Text style={styles.type}>{method.type}</Text>
    <Text style={styles.lastFour}>
      {method.lastFour.length === 4
        ? `**** **** **** ${method.lastFour}`
        : '**** **** **** ****'}
    </Text>         
       </View>

    {selectedMethod === method.id && (
      <View style={styles.radioButton} />
    )}
  </TouchableOpacity>
))}

</View> 
)
}













const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      backgroundColor: '#f9f9f9',
      
    },
    title: {
      fontSize: 18,
       marginBottom: 10,
      },
    card: {
      padding: 16,
      borderRadius: 15,
      backgroundColor: 'white',
      marginBottom: 10,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#ddd',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      height:'25%'
    },
    selectedCard: {
      borderColor: '#000',
      backgroundColor: '#3C2F2F',
    },
    brand: {
      fontSize: 18,
      fontWeight: '600',
    },
    type: {
      fontSize: 14,
      color: '#666',
    },
    lastFour: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 4,
    },
    radioButton: {
      position: 'absolute',
      right: 10,
      top: 30,
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
  
    },
  });
  
   
  







export default PaymentMethod