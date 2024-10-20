import React from "react";

import UserPaymentScreen from '@/src/components/order/payment/add/userPaymentScreen'
import Header from "@/src/components/ui/Header";
const PaymentUser = () => {
  return (
    <>
     <Header title="Payments Methods" backgroundColorCode="#FFFFFF" />
      <UserPaymentScreen />
    </>
  );
};

 

export default PaymentUser;