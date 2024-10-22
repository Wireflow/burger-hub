
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
import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useSearchProducts = (query: string) => {
    return useQuery<Product[]>({
      queryKey: ['searchProducts', query], 
      queryFn: async () => {
        console.log('Executing search with query:', query);  
  
        const { data, error } = await supabase
          .from("Products")
          .select("*")
          .ilike('name', `%${query}%`);  
  
        if (error) {
          console.error('Search Error:', error.message);
          throw new Error(error.message);
        }
  
        console.log('Search Results:', data);  
        return data;
      },
      enabled: !!query,  
    });
  };
  
