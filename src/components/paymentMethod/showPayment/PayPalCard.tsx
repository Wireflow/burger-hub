// import React from 'react';
// import { TouchableOpacity, Text, Animated, View } from 'react-native';
// import { PanGestureHandler, State } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import styles from '../../ui/styles';
// import { PayPalCardProps } from '../../../types/types';

// const PayPalCard: React.FC<PayPalCardProps> = ({ method, translateX, isSwiped, handleSwipe, handleDelete }) => {
//     const maskAccountName = (accountName: string | null) => {
//         if (!accountName || accountName.length <= 2) return accountName || '****';
//         return '*'.repeat(accountName.length - 2) + accountName.slice(-2);
//     };

//     return (
//         <PanGestureHandler
//             onGestureEvent={Animated.event(
//                 [{ nativeEvent: { translationX: translateX[method.id] || new Animated.Value(0) } }],
//                 { useNativeDriver: true }
//             )}
//             onHandlerStateChange={(event) => {
//                 if (event.nativeEvent.state === State.END) {
//                     handleSwipe(method.id, event.nativeEvent.translationX);
//                 }
//             }}
//         >
//             <Animated.View style={[styles.card, { transform: [{ translateX: translateX[method.id] || new Animated.Value(0) }] }]}>
//                 <TouchableOpacity style={styles.cardContent}>
//                     <View style={styles.paypalContainer}>
//                         <Text style={styles.paypalPlaceholder}>P</Text>
//                         <View style={styles.details}>
//                             <Text style={styles.type}>PayPal</Text>
//                             <Text style={styles.lastFour}>
//                                 {maskAccountName(method.account_name ?? null)} 
//                             </Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>

//                 {isSwiped[method.id] && (
//                     <TouchableOpacity style={styles.deleteIcon} onPress={() => handleDelete(method.id)}>
//                         <Icon name="trash" size={30} color="red" />
//                     </TouchableOpacity>
//                 )}
//             </Animated.View>
//         </PanGestureHandler>
//     );
// };

// export default PayPalCard;
