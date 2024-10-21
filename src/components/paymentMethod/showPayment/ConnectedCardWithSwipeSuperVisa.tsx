import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { deleteVisaOrSuperVisaPayment, deletePayPalPayment } from "../../../queries/products/deletePayment";
import { PaymentMethodPayPal, PaymentMethodsResponse, PaymentMethodVisa } from "@/src/types/validations/Payments";
import { PaymentType } from "@/src/store/cart/cartSlice";
import Paypal from "../../ui/PaymentCard/Paypal";
import SuperVisa from "../../ui/PaymentCard/SuperVisa";
import Visa from "../../ui/PaymentCard/Visa";
import Header from "../../order/cart/Header";
import ItemsHidden from "./ItemDeleteHidden";

type Prop = {
    paymentMethods: PaymentMethodVisa[] | null;
    onClick:(id: number, methodType:PaymentType )=>void

}

const ConnectedCardWithSwipeSuperVisa = ({ paymentMethods,onClick }: Prop) => {
    console.log("im connect this datapayment",paymentMethods)
    const handleDelete = async (id: number, methodType =PaymentType.Visa) => {
        try {
            console.log(`Payment method ID: ${id}`);

            await deleteVisaOrSuperVisaPayment(id);
            
        } catch (error) {
            console.error("Error deleting payment method:", error);
        }
    };
 

    return (
         
<> 
                 { paymentMethods && paymentMethods?.map((payment) => (
                    <SwipeListView
                        data={[payment.id]}  
                        renderItem={({ item }) => (
                            <Visa
                                onClick={() => {}}
                                paymentMethode={payment}
                            />
                        )}
                        renderHiddenItem={({ item }) => (
                            <ItemsHidden onClick={() => onClick(payment.id,payment.method_type)} />
                        )}
                        rightOpenValue={-95}
                        keyExtractor={item => payment.id.toString()} 
                        disableRightSwipe
                    />
                ))} 
                 </>
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

export default ConnectedCardWithSwipeSuperVisa;