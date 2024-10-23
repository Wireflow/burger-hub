import React from "react";
import { View, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { PaymentMethodPayPal } from "@/src/types/validations/Payments";
import { PaymentType } from "@/src/store/cart/cartSlice";
import Paypal from "../../ui/PaymentCard/Paypal";
import ItemsHidden from "./ItemDeleteHidden";
type Prop = {
    paymentMethods: PaymentMethodPayPal[] | null;
    onClick:(id: number, methodType:PaymentType )=>void

}
const ConnectedCardWithSwipePaypal = ({ paymentMethods,onClick }: Prop) => {
    console.log("im connect this datapayment",paymentMethods)
 
    if (!paymentMethods) return null; 

    return (
         
                <View> 
                     <SwipeListView
                        data={paymentMethods}  
                        renderItem={({ item }) => (
                            <Paypal
                                onClick={() => {}}
                                paymentMethode={item}
                            />
                        )}
                        renderHiddenItem={({ item }) => (
                            <ItemsHidden onClick={() => onClick(item.id,item?.method_type)} />
                        )}
                        rightOpenValue={-95}
                        keyExtractor={item => item.id.toString()}  
                        disableRightSwipe
                    />
             
                 </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         marginHorizontal:'auto',
     },
    safeArea: {
 
        width:'100%',
         height:'auto'

     },
});

export default ConnectedCardWithSwipePaypal;