import { supabase } from "@/src/services/supabase/client";

export const deleteProductFavorite = async (productId: number, userId: string) => {
    try {
        const { data, error } = await supabase
            .from('Favorites')
            .delete()
            .eq("user_id", userId)
            .eq("product_id", productId)
 
        console.log("Deleted favorite data:", data);

        if (error) {
            throw new Error(`Failed to delete favorite: ${error.message}`);
        }

        return data;  
    } catch (error: any) {
        console.error("Error deleting favorite:", error.message || error);
        throw error; 
    }
}