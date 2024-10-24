import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const getFavoriteProductsByUserIdWithProductId = async (
  productId: number,
  id: string
) => {
  try {
    const { data: favorite, error: favoritesError } = await supabase
      .from("Favorites")
      .select("*")
      .eq("user_id", id)
      .eq("product_id", productId);
    if (favoritesError) throw new Error("Failed to get favorites.");

    return favorite;
  } catch (error: any) {
    console.error("Error getting favorite products:", error);
    throw error;
  }
};

export const useGetFavoriteProductsByUserIdWithProductId = (
  productId: number,
  id: string
) => {
  return useQuery({
    queryKey: ["sd"],
    queryFn: async () => {
      const products = await getFavoriteProductsByUserIdWithProductId(
        productId,
        id
      );
      return products;
    },
  });
};
