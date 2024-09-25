import { supabase } from "@/src/services/supabase/client";
import { Insert } from "@/src/services/supabase/table.types";
import { addressSchema } from "@/src/types/validations/address";

export const createAddress = async (data: Insert<"Addresses">) => {
    try {
        const parsedData = addressSchema.safeParse(data);
        if (!parsedData.success) {
            throw new Error(`Validation error`);
        }

        const { data: address, error } = await supabase
            .from("Addresses")
            .insert([{ ...parsedData.data, user_id: "5a137ff5-d187-4c6b-8e65-9e6dbbde83ba" }]);

        if (error) throw new Error(`Failed to create address`);

        return address;
    } catch (error: any) {
        console.error("Error creating address:", error);
        throw error;
    }
}