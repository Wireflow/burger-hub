import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import ContentDetails from './ContentDetails';
 import ConnectTotal from './ConnectTotal';
 import ConnectedCardAddress from './ConnectedCardAddress';
import { useSessionStore } from '@/src/store/useSessionStore';
import ConnectedNotFoundAddressId from './ConnectedNotFoundAddressId';
import { useCartStore } from '@/src/store/cart/cartStore';

const CheckOutScreen = () => {
  const { session } = useSessionStore();
  const { cart } = useCartStore(state => state);
  const addressId =cart.addressId;
 

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Delivery</Text>
<ContentDetails name='mohammed alkhax' phon=' 7160526755'/>

{
  !addressId  && <ConnectedNotFoundAddressId/>
}
           {addressId && <ConnectedCardAddress addressId={addressId} /> }

             <ConnectTotal/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
         padding: 30,
        backgroundColor: '#F5F5F8',
        height:'100%',
        width:'100%',
        position:'relative'

    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default CheckOutScreen;