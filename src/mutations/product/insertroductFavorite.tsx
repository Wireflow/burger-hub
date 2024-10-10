 import { supabase } from "@/src/services/supabase/client";
  
export const insertroductFavorite = async (productId: number,userId:string) => {

    try {
 
       
        const { data:favorite, error } = await supabase
        .from('Favorites')
        .insert([
          { product_id: productId, user_id: userId },
        ]).select()
         if (error) throw new Error(`Failed to create favorite`);

        return favorite;
    } catch (error: any) {
        console.error("Error creating favorite:", error);
        throw error;
    }
}

 