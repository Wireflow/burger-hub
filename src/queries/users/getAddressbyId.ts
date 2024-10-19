import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
<<<<<<< HEAD:Burger-app/src/queries/users/getAddressbyId.ts
import { useQuery } from "@tanstack/react-query";
=======
 import { useQuery } from "@tanstack/react-query";
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:src/queries/users/getAddressbyId.ts
export type addressWithAdress = Row<"Addresses"> 

export const useGetAddressbyId = (id: number) => {

    return useQuery({
        queryKey: ['address', id],
        queryFn: () => getAddressById(id),
        enabled:!!id
    });
};

 export const getAddressById = async (id: number) => {
    try {
        const { data: address, error } = await supabase
            .from("Addresses")
            .select("*")
            .eq("id", id)
            .single();
        
        if (error)      
               console.error(error);

        
        return address ;  
    } catch (error) {
        console.error(error);
        return null;  
    }
};