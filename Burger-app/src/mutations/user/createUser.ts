import { supabase } from "@/src/service/subabase/client";
import { Insert } from "@/src/service/subabase/table.types";
import { userSchema, userSchemaType } from "@/src/types/validations/user";


export const createUser=async (data:Insert<"User">)=>{
    try {
        const parsedata=userSchema.safeParse(data)
        if(!parsedata.success){
            throw new Error("error")
        }
        const {data:user,error}=await supabase
        .from("User")
        .insert(parsedata.data);
      
        if (error) throw new Error("Failed to create user!");

        return user
  } catch (error: any) {
    console.error("Error creating user:", error);
    throw error;
  }

}