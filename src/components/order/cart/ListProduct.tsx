import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import CardProduct from './CardProduct'; // Ensure this path is correct
import ItemsHidden from './ItemsHidden'; // Ensure this path is correct
import { useCartStore } from '@/src/store/cart/cartStore';
import Button from '../../ui/Button';
import { Product } from '@/src/types/product/Product';
import OrderDialog from './ModelOrderType';
import Header from './Header';
import NotFoundproduct from './NotFoundproduct';

const ListProduct: React.FC = () => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const closeDialog = () => { setDialogVisible(!dialogVisible) };
    const { cart } = useCartStore(state => state);
    const products: Product[] = cart.products;
    console.log("I'm cart ", cart);

    return (
        <View style={styles.container}>
            {cart.products.length !== 0 ? (
                <SafeAreaView style={styles.safeArea}>
                    <Header />
                    <SwipeListView
                        data={products}
                        renderItem={({ item }) => <CardProduct item={item} />}
                        renderHiddenItem={({ item, index }, rowMap) => <ItemsHidden item={item} rowMap={rowMap} />}
                        rightOpenValue={-105}
                        keyExtractor={item => item.id.toString()}
                        disableRightSwipe
                    />
                    <OrderDialog visible={dialogVisible} onClose={closeDialog} />
                    <View style={styles.buttonContainer}>
                        <Button title='Complete order' size='large' color='red' onClick={closeDialog} />
                    </View>
                </SafeAreaView>
            ):<NotFoundproduct/>

            
            }
         
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F9',
        paddingTop: 30,
    },
    safeArea: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        marginLeft: 30,
    },
    buttonContainer: {
        height: 60,
        width: '100%',
        marginBottom: 20,
    },
});

export default ListProduct;