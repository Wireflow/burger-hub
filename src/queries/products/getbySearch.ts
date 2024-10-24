export interface Product {
  id: number;
  name: string | null;
  price: number | null;
  category_id: number; // Fixed typo
  created_at: string;
  deletedAt: string | null; // Fixed typo
  description: string | null;
  imageUrl: string | null; 
  is_deleted: boolean | null;
  restaurant_Id: number | null;
  updatedAt: string | null;
}

import { supabase } from "@/src/services/supabase/client";
import { usesearchStore } from "@/src/store/search/searchStore"; // Fixed naming convention
import { useQuery } from "@tanstack/react-query";

export const useSearchProducts = (query: string) => {
const { setSearchTerm } = usesearchStore(); // Fixed naming convention

return useQuery<Product[]>({
  queryKey: ['searchProducts', query], 
  queryFn: async (): Promise<Product[]> => {
    console.log('Executing search with query:', query);  

    const { data, error } = await supabase
      .from("Products")
      .select("*")
      .ilike('name', `%${query}%`);  

    if (error) {
      console.error('Search Error:', error.message);
      throw new Error(error.message);
    }

    // Ensure the data is in the correct format
    const products = data as unknown as Product[]; // Cast the data to Product[]

    // Set the search term to the first product's name if data is not empty
    if (products.length > 0) {
      setSearchTerm(products[0].name || ""); // Set search term based on the first result
    }

    return products; // Return the data instead of setting the search term
  },
  enabled: !!query,  
});
};
