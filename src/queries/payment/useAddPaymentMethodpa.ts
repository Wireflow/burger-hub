import { supabase } from "@/src/services/supabase/client";
import { PaymentType } from "@/src/store/cart/cartSlice";
 import { useMutation } from "@tanstack/react-query";
 import { Insert } from "@/src/services/supabase/table.types";

 export type PaypalTypeQ = {
  user_id: string,
  method_type: PaymentType ,
  account_name: string,
  phone_number: string,
  email: string,

 };

const addPayPalPaymentMethod = async (paymentData: Insert<'Payment_Methodpaypal'> ) => {
  const { data, error } = await supabase
    .from("Payment_Methodpaypal")
    .insert([paymentData]);

  if (error) {
    throw new Error(error.message);
  }


  return data;
};


export const useAddPayPalPaymentMethod = () => {
  return useMutation({
    mutationFn: addPayPalPaymentMethod,
    onSuccess: () => {
      console.log("ok");
    },
    onError: (error) => {
      console.error( error);
    },
  });
};
