import { supabase } from "@/src/services/supabase/client";
import { useMutation } from "@tanstack/react-query";

const addPaymentMethod = async (paymentData: any) => {
  const { data, error } = await supabase
    .from("Payment_Method")
    .insert([paymentData]);

  if (error) {
    throw new Error(error.message);
  }

 
  return data;
};

export const useAddPaymentMethod = () => {
  return useMutation({
    mutationFn: addPaymentMethod,
    onSuccess: () => {
      console.log("تمت إضافة طريقة الدفع بنجاح");
    },
    onError: (error) => {
      console.error("حدث خطأ:", error);
    },
  });
};
