import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../../ui/Button';

const ConnectedNotFoundAddressId = () => {
  return (
   <View>
    <View style={styles.deliveryAddress}>
        <Text style={styles.label}>Delivery address</Text>
    </View>
 
        <View
          style={{
             justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            gap: 10,
            margin:20
          }}
        >
          <Image
            source={require("@/assets/icons/Location.png")}
            style={{ width: 40, height: 35 }}
          />
          <Text style={{ fontSize: 28, fontWeight: "600", width: 200 }}>
            No Address yet
          </Text>
         </View>
         <Button title='Select  Address' size='medium' color='red' onClick={() => {}} />


  
 </View>  )
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
        opacity: 0.7,
    },
    icon: {
        height: 50,
        width: 50,
        backgroundColor: '#FFE3E3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
    },
    changeLink: {
        color: '#F47B0A',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    deliveryAddress: {
        marginBottom: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '97%',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
});
export default ConnectedNotFoundAddressId