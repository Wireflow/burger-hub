 

import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { usesearchStore } from "@/src/store/search/searchStore"; // Fixed naming convention
import { useQuery } from "@tanstack/react-query";

export const useSearchProducts = (query: string) => {
 
return useQuery<Row<'Products'>[]>({
  queryKey: ['searchProducts', query], 
  queryFn: async (): Promise<Row<'Products'>[]> => {
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
    const products = data as unknown as Row<'Products'>[]; // Cast the data to Product[]

 

    return products; // Return the data instead of setting the search term
  },
  enabled: !!query,  
});
};
