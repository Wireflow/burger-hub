
export interface Product {
    id: number;
    name: string | null;
    price: number | null;
    categoriy_id: number;
    created_at: string;
    deleteAt: string | null;
    description: string | null;
    imageUrl: string | null; 
    is_deleted: boolean | null;
    restaurant_Id: number | null;
    updatedAt: string | null;
}

// استعلام البحث
import { supabase } from "../../services/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useSearchProducts = (searchTerm: string) => {
    return useQuery<Product[]>({
        queryKey: ['searchProducts', searchTerm],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("Products")
                .select("*")
                .ilike('name', `%${searchTerm}%`); 

            if (error) throw new Error(error.message);
            return data;
        },
        enabled: !!searchTerm, 
    });
};