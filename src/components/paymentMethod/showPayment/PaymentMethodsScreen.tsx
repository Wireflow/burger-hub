// import React, { useState } from "react";
// import { View, Text, Animated } from "react-native";
// import PaymentCard from "./PaymentCard";
// import PayPalCard from "./PayPalCard";
// import LoadingIndicator from "./LoadingIndicator";
// import ErrorText from "./ErrorText";
// import { useGetUserPaymentMethods } from "../../../queries/payment/gitAllPayment";
// import { useGetUserPayPalPaymentMethods } from "../../../queries/products/getAllPayPalPaymentMethods";
// import {
//   deleteVisaOrSuperVisaPayment,
//   deletePayPalPayment,
// } from "../../../queries/products/deletePayment";
//  import { useGetAllPaymentUser } from "@/src/queries/payment/getAllPaymentUser";
// import { useSessionStore } from "@/src/store/useSessionStore";
// import { PaymentMethodVisa } from "@/src/types/validations/Payments";
// import { PaymentType } from "@/src/store/cart/cartSlice";
// import Paypal from "../../ui/PaymentCard/Paypal";
// import SuperVisa from "../../ui/PaymentCard/SuperVisa";
// import Visa from "../../ui/PaymentCard/Visa";
// import ConnectedCardWithSwipe from "./ConnectedCardWithSwipe";
// import { StyleSheet } from "react-native";

// const PaymentMethodsScreen: React.FC = () => {
//   const { session } = useSessionStore();
 
 
//    const userId = session?.id;
//   const {
//     data: paymentMethods,
//     error: paymentError,
//     isLoading: paymentLoading,
//     refetch: refetchPaymentMethods,
//     isFetched
//   } = useGetAllPaymentUser(userId as string);

 
 

//   if (paymentLoading ) {
//     return <LoadingIndicator />;
//   }

//   if (paymentError) {
//     return <ErrorText message={paymentError.message} />;
//   }
 

//   return (
//     <View style={styles.container}>
//       {isFetched && 
//       (  paymentMethods ?  <ConnectedCardWithSwipe paymentMethods={paymentMethods}/> :''
// )
//       }
//    </View>
//   );
// };

// export default PaymentMethodsScreen;
// const styles = StyleSheet.create({
//   container :{
//    }
// })
