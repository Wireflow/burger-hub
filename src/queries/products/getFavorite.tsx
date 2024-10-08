import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "../../store/useSessionStore";

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string; 
};

export const getFavoriteProductsByUserId = async (id:string): Promise<Product[]> => {
  try {
  
   
    const { data: favorites, error: favoritesError } = await supabase
      .from("Favorites")
      .select("product_id")
      .eq("user_id", id);

    if (favoritesError) throw new Error("Failed to get favorites.");

   
    if (!favorites || favorites.length === 0) return [];

   
    const productIds = favorites.map(favorite => favorite.product_id);
    const { data: products, error: productsError } = await supabase
      .from("Products") 
      .select("*")
      .in("id", productIds); 

    if (productsError) throw new Error("Failed to get products.");

    return (products as Product[]) || []; 
  } catch (error: any) {
    console.error("Error getting favorite products:", error);
    throw error;
  }
};

export const useGetFavoriteProductsByUserId = (id:string) => {
  return useQuery<Product[], Error>({
    queryKey: ["favoriteProducts"],
    queryFn: async () => {
      const products = await getFavoriteProductsByUserId(id);
      return products;
    },
  });
};