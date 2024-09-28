import { useSessionStore } from '@/src/store/useSessionStore';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../ui/Button';
import CardAddress from './CardAddress';
import { useGetAddressbyId } from '@/src/queries/users/getAddressbyId';
import { Row } from '@/src/services/supabase/table.types';

export type addressRow = Row<"Addresses">;

const ConnectedCardAddress = () => {
    const [address, setAddress] = useState<addressRow | null>(null);
    const { session } = useSessionStore();
    const addressId = session?.addressId;

    // const { data, error, isLoading } = useGetAddressbyId(addressId??0);
 

    return (
        <View>
            <View style={styles.deliveryAddress}>
                <Text style={styles.label}>Delivery address</Text>
 
                    <TouchableOpacity>
                        <Text style={styles.changeLink}>change</Text>
                    </TouchableOpacity>
                
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

export default ConnectedCardAddress;