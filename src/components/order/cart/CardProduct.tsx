import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useCartStore } from '@/src/store/cart/cartStore';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type Product = {
    name: string;
    price: number;
    quantity: number;
    id:number
};
type Props = {
    item: Product;
};

const CardProduct: React.FC<Props> = ({ item,  }) => {
    const { increaseQuantity,decreaseQuantity } = useCartStore(state => state);

    return (
        <View style={styles.card}>
            <Image source={require('@/assets/images/Mask Group.png')} style={styles.image} />
            <View style={styles.textContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                </View>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={()=>{decreaseQuantity(item.id)}} style={styles.quantityButton}>
                        <Text style={styles.quantityText}><AntDesign name="minus" size={12} color="white" /></Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={()=>{increaseQuantity(item.id)}} style={styles.quantityButton}>
                        <Text style={styles.quantityText}><AntDesign name="plus" size={12} color="white" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CardProduct;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
         width:windowWidth*0.9,
        marginHorizontal: 'auto',
     },
    image: {
        width: 70,
        height: 70,
        borderRadius: 5,
        marginRight: 15,
        marginTop:10
        
    },
    textContainer: 
        {
        height:50,
        width:150,
        position:'relative',
        left:"-25%",
        top:-1,
     }
     ,
    name: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    price: {
        color: '#AF042C',
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#AF042C',
        borderRadius: 15,
        justifyContent: 'flex-end',
        width: 68,
        height:30,
        position:'absolute',
        right:0,
        bottom:0
    },
    quantityButton: {
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 5,
    },
    quantityText: {
        color: '#FFFFFF',
    },
    quantity: {
        fontSize: 11,
        color: '#FFFFFF',
    },
});