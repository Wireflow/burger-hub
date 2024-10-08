// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import Button from '../../ui/Button'
// import { useCartStore } from '@/src/store/cart/cartStore';
// import { router } from 'expo-router';
 
// const ConnectedProceed = () => {

//     const { totalPrice } = useCartStore(state => state);
//     const Total = totalPrice();
//   return (
//     <View style={styles.container}>

//     <View style={styles.totalContainer}>
//      <Text style={styles.totalLabel}>Total</Text>
//      <Text style={styles.totalAmount}>${Total}</Text>
//  </View>

//       <Button title='Proceed to confirmation' color='red' size='large' onClick={()=>router.navigate('/order/orderConfirmation')}/>
// </View>  )
// }
// const styles = StyleSheet.create({
//     container:{height:130,
//          width:'100%',
//           position:'absolute',
//          bottom:20,
//          left:'10%'
//     },
//     totalContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 20,
//     },
//     totalLabel: {
//         fontSize: 22,
//         fontWeight: '600',
//     },
//     totalAmount: {
//         fontSize: 18,
//         fontWeight: '600',
//     },
// });




// export default ConnectedProceed