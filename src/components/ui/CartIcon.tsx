import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any icon set
type prop ={
  itemCount:number
}

const CartIcon = ({itemCount} :prop) => {
      return (
        <TouchableOpacity style={styles.containeer} onPress={()=>router.navigate('/(drawer)/order/cart')}>
          
          <MaterialCommunityIcons name="cart-outline" size={24} color="black" style={{opacity:0.5}}/>
          {itemCount > 0 && (
            <View style={styles.badge} >
              <Text style={styles.badgeText}>{itemCount}</Text>
            </View>
          )}
      
        </TouchableOpacity>
      );
  };
const styles = StyleSheet.create({

    titleText: {
      fontSize: 30,
      color: 'black',
    },  containeer: {
  right:15
     
    
     },
    badge: {
      position: 'absolute',
      right: 3,
      top: -5,
      backgroundColor: '#AF042C',
      borderRadius: 10,
      paddingHorizontal: 6,
      paddingVertical: 2,
      height:25
      
    },
    badgeText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default CartIcon;