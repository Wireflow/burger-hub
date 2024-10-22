import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
  import { PaymentMethodsResponse, PaymentMethodVisa } from "@/src/types/validations/Payments";
 
import Header from "../../order/cart/Header";
 import ConnectedCardWithSwipeVisa from "./ConnectedCardWithSwipeVisa";
import ConnectedCardWithSwipePaypal from "./ConnectedCardWithSwipePaypal";
import { deletePayPalPayment, deleteVisaOrSuperVisaPayment } from "@/src/queries/products/deletePayment";
import { PaymentType } from "@/src/store/cart/cartSlice";

type Prop = {
    paymentMethods: PaymentMethodsResponse;
    refetch:()=>void
}

const ConnectedCardWithSwipe = ({ paymentMethods ,refetch}: Prop) => {
    console.log("im connect this datapayment",paymentMethods)
 

    const handleDelete = async (id: number, methodType:PaymentType ) => {
        try {
          console.log(`Payment method ID: ${id}`);
          if (methodType === "Visa" || methodType === "Super Visa") {
            await deleteVisaOrSuperVisaPayment(id);
            refetch()
          } else if (methodType === "PayPal") {
            await deletePayPalPayment(id);
            refetch()
          }
     
        } catch (error) {
          console.error("Error deleting payment method:", error);
        }
      };
    
    return (
        <View style={styles.container}>
                        <Header />

            <SafeAreaView style={styles.safeArea}>

              
                {paymentMethods?.payment_method_visa_super_visa && (<ConnectedCardWithSwipeVisa onClick={handleDelete} paymentMethods={paymentMethods.payment_method_visa_super_visa}/>)}
                {paymentMethods?.payment_method_paypal && ( <ConnectedCardWithSwipePaypal onClick={handleDelete} paymentMethods={paymentMethods?.payment_method_paypal}/>
)}



            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         marginHorizontal:10,
     },
    safeArea: {
 
        width:'100%',
         height:'auto'

     },
});

export default ConnectedCardWithSwipe;