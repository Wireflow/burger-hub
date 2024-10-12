import { SignUpType } from "@/src/types/SignUpType";
import { supabase } from "../../services/supabase/client";
import { Database } from "@/src/services/supabase/database.type";

export default async function SignUpQuery(dataFromUser: SignUpType) {
  try {
    const { data:dataFromSignUp, error } = await supabase.auth.signUp({
      email: dataFromUser.email,
      password: dataFromUser.password,
    });

    console.log("Sign-up data:", dataFromSignUp);

    if (error) {
      console.log("Sign-up error:", error);
      throw error;  
    }

    const userId = dataFromSignUp.user?.id;

    if (!dataFromSignUp.user) {
      throw new Error("User data is missing after sign-up.");
    }

     
    const userData: Database["public"]["Tables"]["User"]["Insert"] = {
      id: userId || "",
      email: dataFromSignUp.user?.email || "",
      name: dataFromUser.name,
      phone: dataFromUser.phone,
    };

    const {data, error: dbError } = await supabase.from("User").insert(userData).select();
    console.log("Database insert data:", data);

    if (dbError) {
      console.log("Database insert error:", dbError);
      throw new Error("Something went wrong while inserting user data.");
    }
    

    return data;   
  } catch (error) {
    if (error instanceof Error) {
      console.log("An unexpected error occurred:", error);

  
    } else {
      // console.error("An unexpected error occurred:", error);
    }
  }
}