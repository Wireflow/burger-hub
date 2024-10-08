import React, { useState } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import ContentDetails from './ContentDetails';
  import ConnectedCardAddress from './ConnectedCardAddress';
import { useSessionStore } from '@/src/store/useSessionStore';
import ConnectedNotFoundAddressId from './ConnectedNotFoundAddressId';
import { useCartStore } from '@/src/store/cart/cartStore';
import ConnectedPickUp from './ConnectedPickUp';
import Proceed from '@/hooks/Proceed';
import { router } from 'expo-router';
import ConfirmAddress from './ConfirmAddress';

const CheckOutScreen = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const closeDialog = () => { setDialogVisible(!dialogVisible) };
  const { session } = useSessionStore();
  const { cart } = useCartStore(state => state);
  const addressId =cart.addressId;
  const orderType = cart.orderType;

  const confirm =()=>{
    if(orderType == 'Delivery' && !addressId ){
     setDialogVisible(true);
    }else {
      router.navigate('/(drawer)/order/payment')
    }
  }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Delivery</Text>

<ContentDetails name='mohammed alkhax' phon=' 7160526755'/>
{orderType == 'Delivery'? (<>{
  !addressId  && <ConnectedNotFoundAddressId/>
}
           {addressId && <ConnectedCardAddress addressId={addressId} /> }
</>):<ConnectedPickUp/>}

<Proceed title='Proceed to payment' method={confirm}/>
         <ConfirmAddress onClose={closeDialog} visible={dialogVisible} />
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