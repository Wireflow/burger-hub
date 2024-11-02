import { supabase } from "@/src/services/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { Insert } from "@/src/services/supabase/table.types";

const addPayment = async (paymentData: Insert<"Payment_Method">) => {
  const { data, error } = await supabase
    .from("Payment_Method")
    .insert([paymentData]);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const AddPaymentMethod = () => {
  return useMutation({
    mutationFn: addPayment,
    onSuccess: () => {
      console.log("تمت إضافة طريقة الدفع بنجاح");
    },
    onError: (error) => {
      console.error("حدث خطأ:", error);
    },
  });
};
