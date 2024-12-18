import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { useQuery } from "@tanstack/react-query";


export const getProductsByCategoryId = async (categoryId: number) => {
  try {
    if (!categoryId) throw new Error("No category ID provided.");

    const { data: products, error } = await supabase
      .from("Products")
      .select("*")
      .eq("categoriy_id", categoryId); 

    if (error) throw new Error("Failed to get products.");

    return products as Row<'Products'>[] || [];
  } catch (error: any) {
    console.error("Error getting products:", error);
    throw error;
  }
};


export const useGetProductsByCategoryId = (categoryId: number) => {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: async () => {
      if (!categoryId) return [];
      const products = await getProductsByCategoryId(categoryId);
      console.log(products); 
      return products as Row<'Products'>[];
    },
  });
};
