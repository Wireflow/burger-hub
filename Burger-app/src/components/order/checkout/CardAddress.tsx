import { useSessionStore } from '@/src/store/useSessionStore';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from '../../ui/Button';
import { Row } from '@/src/services/supabase/table.types';
type Props ={
    data:Row<"Addresses">
}
const CardAddress = ({data}:Props) => {
    return (
    <View style={styles.addressItem}>
    <View  style={styles.icon}>
     <Image
     source={require('@/assets/icons/Location.png')}
     />
    </View>
<View style={styles.addressDetails}>
  <Text>rfg</Text>
  <Text>{`svda, $fvdvdfvz`}</Text>
  <Text>rfevfd</Text>
</View>
</View> 
     )
}


const styles = StyleSheet.create({
 
    addressItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
      padding: 16,
      backgroundColor: "white",
      borderRadius: 20,
      elevation: 1,
    },
    addressDetails: {
      marginLeft: 15,
      flex: 1,
      opacity:0.7
    }, 
    icon:{
        height:50,
        width:50,
        backgroundColor:'#FFE3E3',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        margin:5

    }
    
  });
export default CardAddress