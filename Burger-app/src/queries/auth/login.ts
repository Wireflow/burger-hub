import { LogInType } from "@/src/types/LogInType";
import { supabase } from "../../services/supabase/client";
import { useQuery } from "@tanstack/react-query";

export default async function logIn(dataFromUser: LogInType): Promise<string> {
  const { email, password } = dataFromUser;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error("Sign-in error:", error);
    throw new Error("Failed to sign in");
  }

  const userId = data.user?.id;

  if (!userId) {
    throw new Error("User ID is missing after sign-in");
  }

  return userId;
}




export const useLoIn= (dataFromUser: LogInType) => {
  return useQuery({
    queryKey: ["login"],
    queryFn: async () => {
      if (!dataFromUser) return null;
      return await logIn(dataFromUser);
    },
  });
};