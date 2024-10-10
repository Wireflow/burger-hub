import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
 import { useQuery } from "@tanstack/react-query";
export type addressWithAdress = Row<"Addresses"> 

export const useGetAddressbyId = (id: number) => {

    return useQuery({
        queryKey: ['address', id],
        queryFn: () => getAddressById(id),
        enabled:!!id
    });
};

 export const getAddressById = async (id: number) => {
    if(id == 0){return;}
    try {
        const { data: address, error } = await supabase
            .from("Addresses")
            .select("*")
            .eq("id", id)
            .single();
        
        if (error) throw new Error("Error fetching addresses: " + error.message);
        
        return address ;  
    } catch (error) {
        console.error(error);
        return null;  
    }
};