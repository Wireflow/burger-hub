
import { supabase } from "@/src/services/supabase/client";
import { Insert } from "@/src/services/supabase/table.types";
import { addressSchema } from "@/src/types/validations/address";


export const createAddress=async (data:Insert<"Addresses">)=>{
    try {
        const parsedata=addressSchema.safeParse(data)
        if(!parsedata.success){
            throw new Error("error")
        }
        const {data:address,error}=await supabase
        .from("Addresses")
        .insert(parsedata.data);
      
        if (error) throw new Error("Failed to create address!");

        return address
  } catch (error: any) {
    console.error("Error creating address:", error);
    throw error;
  }

}