
import { supabase } from "@/src/services/supabase/client";
import { Insert } from "@/src/services/supabase/table.types";
import { UserSchema } from "@/src/types/validations/user";
 

export const createUser=async (data:Insert<"User">)=>{
    try {
        const parsedata=UserSchema.safeParse(data)
        if(!parsedata.success){
            throw new Error("error")
        }
        const {data:user,error}=await supabase
        .from("User")
        .insert(data);
      
        if (error) throw new Error("Failed to create user!");

        return user
  } catch (error: any) {
    console.error("Error creating user:", error);
    throw error;
  }

}