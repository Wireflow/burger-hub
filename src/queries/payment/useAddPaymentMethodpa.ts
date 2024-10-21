import { supabase } from "@/src/services/supabase/client";
import { useMutation } from "@tanstack/react-query";


const addPayPalPaymentMethod = async (paymentData: any) => {
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
