import { supabase } from "@/src/services/supabase/client";
import { useSessionStore } from "@/src/store/useSessionStore";

export const addressDelete = async (address_Id: number) => {
  try {
    const { session } = useSessionStore();
    const userId = session?.id;
    const { error } = await supabase
      .from("Addresses")
      .update({ is_deleted: true, deletedAt: new Date().toISOString() })
      .eq("id", address_Id)
      .eq("user_id", userId as string);

    if (error) throw new Error("error in delete address");

  } catch (error:any) {
    console.error("error in delete address", error.message);
  }
};
