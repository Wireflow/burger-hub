import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Import from react-native-paper
import Button from '../../ui/Button';
import { useCartStore } from '@/src/store/cart/cartStore';
import { router } from 'expo-router';

type Props = {
    visible?: boolean;
    onClose:any;
};

const OrderDialog = ({ visible, onClose }: Props) => {
    const { cart,changeOrderType } = useCartStore(state => state);

    const [selectedValue, setSelectedValue] = useState(cart.orderType);

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.dialog}>
                    <Text style={styles.title}>Select order type</Text>
                    <View style={styles.radioGroup}>
                        <RadioButton
                            value="Delivery"
                            status={selectedValue === 'Delivery' ? 'checked' : 'unchecked'}
                            color='black'
                            onPress={() => setSelectedValue('Delivery')}
                        />
                        <Text style={styles.radioLabel}>Delivery</Text>
                    </View>
                    <View style={styles.radioGroup}>
                        <RadioButton
                            value="Pickup"
                            status={selectedValue === 'Pickup' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('Pickup')}
                            color='black'
                        />
                        <Text style={styles.radioLabel}>Pickup</Text>
                    </View>
                    <TouchableOpacity style={styles.proceedButton} onPress={onClose}>
                       <Button title='Proceed' color='red' size='medium' onClick={()=>{changeOrderType(selectedValue);
                        onClose();
                        router.navigate('/CheckOut')
                        }}/>                         
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialog: {
        width: 300,
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
         marginVertical:20,
         marginLeft:12
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioLabel: {
        marginLeft: 8,
        fontSize:18
    },
    proceedButton: {
        marginTop: 20,
         paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        height:60,
        width:280
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default OrderDialog;