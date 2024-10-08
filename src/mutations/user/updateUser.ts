import { supabase } from "@/src/service/subabase/client";
import { Update } from "@/src/service/subabase/table.types";



export const updateUser=async (data:Update<"User">)=>{
    try {
        
        if(!data.id)   throw new Error("can't find user!")

        
        const {data:user,error}=await supabase
        .from("User")
        .update(data)
        .eq("id",data.id)
      
        if (error) throw new Error("Failed to update user!");

        return user
  } catch (error: any) {
    console.error("Error update user:", error);
    throw error;
  }

}