import { supabase } from "@/src/services/supabase/client";
import { useQuery } from '@tanstack/react-query';

  
 const getModifiersProduct = async (productId: number) => {
     const { data: product, error: productError } = await supabase
        .from('Products')
        .select('id')
        .eq('id', productId)
        .single();

        
    if (productError) throw productError;

     const { data: modifiers, error: modifiersError } = await supabase
        .from('modifier')
        .select('id, name')  
        .eq('productId', productId);

    if (modifiersError) throw modifiersError;

     const options = await Promise.all(
        modifiers.map(async (modifier) => {
            const { data: modifierOptions, error: optionsError } = await supabase
                .from('modifier_option')
                .select('option_name,price,id')  
                .eq('modifier_id', modifier.id);

            if (optionsError) throw optionsError;

            return {
                "modifire-name": modifier.name,
                "modifier-id": modifier.id,
                "modifierOption": modifierOptions.map(option => ({
                    "modifierOptionName": option.option_name,
                    "modifierOptionPrice": option.price,
                    "modifierOptionId": option.id,


                })),
            };
        })
    );

     return {
        productId: product.id,
        options,
    };
};

 

export const useGetModifiersProduct = (id?: number) => {
    return useQuery({
      queryKey: ["modifiers", id],
      queryFn: async () => {
        if (!id) return null;
        return await getModifiersProduct(id);
      },
    });
  };