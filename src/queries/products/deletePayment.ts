import { supabase } from "@/src/services/supabase/client";

export const deleteVisaOrSuperVisaPayment = async (paymentId: number) => {
  try {
    const { data, error } = await supabase
      .from('Payment_Method')
      .delete()
      .eq('id', paymentId); 

    if (error) {
      throw new Error(`Error deleting payment method: ${error.message}`);
    }
    console.log('Payment method deleted:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const deletePayPalPayment = async (paymentId: number) => {
    try {
      const { data, error } = await supabase
        .from('Payment_Methodpaypal')
        .delete()
        .eq('id', paymentId); 
  
      if (error) {
        throw new Error(`Error deleting PayPal method: ${error.message}`);
      }
      console.log('PayPal payment method deleted:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };