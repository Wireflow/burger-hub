import { supabase } from "@/src/service/subabase/client";
import { Update } from "@/src/service/subabase/table.types";


export const updateAddress=async (data:Update<"Addresses">)=>{
    try {
        if(!data.id){
            throw new Error("can't find address")
        }
        const {data:address,error}=await supabase
        .from("Addresses")
        .update(data)
        .eq("id",data.id)
      
        if (error) throw new Error("Failed to update address!");

        return address
  } catch (error: any) {
    console.error("Error update address:", error);
    throw error;
  }

}