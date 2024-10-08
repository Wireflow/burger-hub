import { SignUpType } from "@/src/types/SignUpType";
import { supabase } from "../../services/supabase/client";
import { Database } from "@/src/services/supabase/database.type";
 
export default async function SignUpQuery(dataFromUser: SignUpType) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: dataFromUser.email,
      password: dataFromUser.password,
    });

    if (error) {
      console.log("Sign-up error:", error);
      throw new Error("Something went wrong during sign-up.");
    }

    const userId = data.user?.id;

    if (!data.user) {
      throw new Error("User data is missing after sign-up.");
    }

    const userData: Database["public"]["Tables"]["User"]["Insert"] = {
      id: userId || "",
      email: data.user?.email || "",
      name: dataFromUser.name,
      phone: dataFromUser.phone,
    };

    const {error:dbError}  = await supabase.from("User").insert(userData);

    if (dbError) {
      console.log("Database insert error:", dbError);
      throw new Error("Something went wrong while inserting user data.");
    }

    // return user;
    
  } catch (err) {
    console.error("Error in SignUpQuery:", err);
    // Optionally, you can return a specific error message or rethrow the error
    throw new Error("An error occurred during the sign-up process.");
  }
}