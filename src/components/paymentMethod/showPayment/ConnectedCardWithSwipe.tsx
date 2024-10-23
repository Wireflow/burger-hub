import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
  import { PaymentMethodsResponse, PaymentMethodVisa } from "@/src/types/validations/Payments";
 
import Header from "../../order/cart/Header";
 import ConnectedCardWithSwipeVisa from "./ConnectedCardWithSwipeVisa";
import ConnectedCardWithSwipePaypal from "./ConnectedCardWithSwipePaypal";
import { deletePayPalPayment, deleteVisaOrSuperVisaPayment } from "@/src/queries/products/deletePayment";
import { PaymentType } from "@/src/store/cart/cartSlice";
import { ActivityIndicator } from "react-native-paper";

type Prop = {
    paymentMethods: PaymentMethodsResponse;
    refetch:()=>void
}

const ConnectedCardWithSwipe = ({ paymentMethods ,refetch}: Prop) => {
    console.log("im connect this datapayment",paymentMethods)
 
    const [loading, setLoading] = useState(false);

    const handleDelete = async (id: number, methodType:PaymentType ) => {
      setLoading(true)
        try {
          console.log(`Payment method ID: ${id}`);
          if (methodType === "Visa" || methodType === "Super Visa") {
            await deleteVisaOrSuperVisaPayment(id);
            refetch()
            setLoading(false)
          } else if (methodType === "PayPal") {
            await deletePayPalPayment(id);
            refetch()
            setLoading(false)
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
            {loading && (
                     <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#AF042C" />
                       </View>
            )}
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
    loaderContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: -50,
      marginTop: -50,
      height: 100,
      width: 100,
       opacity: 0.4,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
});

export default ConnectedCardWithSwipe;