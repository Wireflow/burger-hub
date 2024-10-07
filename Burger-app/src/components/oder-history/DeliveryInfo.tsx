// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { Address, formatAddress } from '@/src/util/addressFormat';
// import { Row } from '@/src/services/supabase/table.types';


// type Prop = {
//   order_type?: string |null;
//   address?: Row<"Addresses">
// };

// const DeliveryInfo = ({order_type,address }: Prop): React.JSX.Element => {
//   // Log the order object for debugging
//   console.log("Order Object:", address);

//   // Check if order and address are defined
//   if (!address) {
//     return <Text>No delivery .</Text>; // Handle null address
//   }

//   // Ensure that address has the expected properties
//   const { city, state, zip_code, country, street } = address;

//   if (!city || !state || !zip_code || !country || !street) {
//     return <Text>Incomplete address details.</Text>; 
//   }

//   return (
//     <View style={styles.container}>
//       {order_type === "delivery" && (
//         <View style={styles.container}>
//           <Text style={styles.deliveryText}>
//             {formatAddress({...address})}
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default DeliveryInfo;

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',
//     padding: 16, // Added padding for better appearance
//   },
//   deliveryText: {
//     color: 'white', // Changed text color for contrast
//   },
// });