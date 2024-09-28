import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import CardProduct from '../cart/CardProduct'; // Ensure this path is correct
import ItemsHidden from '../cart/ItemsHidden'; // Ensure this path is correct
import { useCartStore } from '@/src/store/cart/cartStore';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Header from './Header';
import Button from '../ui/Button';

const ListProduct: React.FC = () => {
    const { cart } = useCartStore(state => state);

    console.log("I'm cart ", cart);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1, alignItems: "flex-start", justifyContent: "center", marginLeft: 30 }}>
                <Header />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <SwipeListView
                        data={cart}
                        renderItem={({ item }) => <CardProduct item={item} />}
                        renderHiddenItem={({ item, index }, rowMap) => <ItemsHidden item={item} rowMap={rowMap} />}
                        rightOpenValue={-105}
                        keyExtractor={item => item.id.toString()}
                        disableRightSwipe
                    />
                </ScrollView>
                <View style={{height:60,width:'100%',marginBottom:20}}>
                    <Button title='Added' size='large' color='red' onClick={() => { }} />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F9',
        paddingTop: 30,
    },
    instruction: {
        textAlign: 'left',
        marginBottom: 20,
        fontSize: 18,
        color: '#555',
        display: 'flex',
        height: 50,
    },
    head: {
        height: 50,
        width: '65%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 'auto',
        marginVertical: 20,
    },
});

export default ListProduct;