import { supabase } from "@/src/services/supabase/client";

export const addressDelete = async (address_Id: number, userId: string) => {
  console.log("User ID:", userId);
  console.log("Address ID:", address_Id);
  
  try {
    // Update the address to mark it as deleted
    const { data: updatedAddress, error } = await supabase
      .from("Addresses")
      .update({ is_deleted: true, updated_at: new Date().toISOString() }) // Set updated_at if needed
      .eq("id", address_Id)
      .eq("user_id", userId); // Ensure the user owns the address

    console.log("Supabase response:", { updatedAddress, error });

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Error in delete address");
    }

    if (!updatedAddress || updatedAddress === 0) {
      console.warn("No address was updated. Check if the address ID and user ID match.");
      return null; // Return null if no address was updated
    }

    return updatedAddress; // Return the updated address data
  } catch (error: any) {
    console.error("Caught error in delete address:", error);
    throw error; // Re-throwing the error for handling upstream
  }
};