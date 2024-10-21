import React from "react";

 import Header from "@/src/components/ui/Header";
import UserPaymentScreen from "@/src/components/paymentMethod/userPaymentScreen";
const PaymentUser = () => {
  return (
    <>
     <Header title="Payments Methods" backgroundColorCode="#FFFFFF" />
      <UserPaymentScreen />
    </>
  );
};

 

export default PaymentUser;