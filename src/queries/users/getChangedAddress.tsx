import { supabase } from "@/src/services/supabase/client";
import { useAddressStore } from "@/src/store/address/useaddressStore";
 import { useSessionStore } from "@/src/store/useSessionStore";
import { addresses } from "@/src/types/schema/address";
import { useQuery } from "@tanstack/react-query";

// Custom hook to get updated addresses
export const useGetUpdatedAddresses = () => {
    const setAddress = useAddressStore((state) => state.setAddress); 

    return useQuery<addresses[], Error>({
        queryKey: ['addressUpdated'],
        queryFn: async () => {
            const addresses = await getUpdatedAddresses();
            setAddress(addresses); 
            return addresses;
        },
    });
};

// Function to fetch updated addresses from Supabase
const getUpdatedAddresses = async () => {
    try {
        const { session } = useSessionStore.getState(); 
        const userId = session?.id;

        if (!userId) {
            throw new Error("User ID is not available.");
        }

        const { data: addresses, error } = await supabase
            .from("Addresses")
            .select("*")
            .eq("user_id", userId as string)
            .eq("is_deleted",false)
            .order("updated_at", { ascending: false })// Sort by last updated date
            .limit(1);

        if (error) throw new Error(`Failed to fetch addresses: ${error.message}`);

        return addresses; 
    } catch (error: any) {
        console.error("Error fetching addresses:", error);
        throw error; 
    }
};