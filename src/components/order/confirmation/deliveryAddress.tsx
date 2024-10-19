import { useGetAddressbyId } from "@/src/queries/users/getAddressbyId";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import CardAddress from "../checkout/CardAddress";
import { Row } from "@/src/services/supabase/table.types";
import { useCartStore } from "@/src/store/cart/cartStore";

 
 

const deliveryAddress = () => {
  
 
    return (
        <View>
            <View style={styles.deliveryAddress}>
                <Text style={styles.label}>Delivery address</Text>
            </View>

 
        </View>
    );
};

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
    deliveryAddress: {
         justifyContent: 'space-between',
        flexDirection: 'row',
        width: '97%',
        marginTop:30,
        marginBottom:12
     },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    changeLink: {
        color: '#F47B0A',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});

export default deliveryAddress;