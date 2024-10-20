import { supabase } from "@/src/services/supabase/client";
import { useQuery } from '@tanstack/react-query';

  
 const getModifiersWithProduct = async (productId: number) => {
     const { data: product, error: productError } = await supabase
        .from('Products')
        .select('*')
        .eq('id', productId)
        .single();

    if (productError) throw productError;

     const { data: modifiers, error: modifiersError } = await supabase
        .from('Modifier')
        .select('id, name')  
        .eq('product_id', productId);

    if (modifiersError) throw modifiersError;

     const options = await Promise.all(
        modifiers.map(async (modifier) => {
            const { data: modifierOptions, error: optionsError } = await supabase
                .from('Modifier_Option')
                .select('option_name,price,id')  
                .eq('modifier_id', modifier.id);

            if (optionsError) throw optionsError;

            return {
                modifierName: modifier.name,
                modifireId: modifier.id,
                modifireOptions: modifierOptions.map(option => ({
                    "modifierOptionName": option.option_name,
                    "modifierOptionPrice": option.price,
                    "modifierOptionId": option.id,


                })),
            };
        })
    );

     return {
        product: product,
        options,
    };
};

 

export const useGetModifiersWithProduct = (id?: number) => {
    return useQuery({
      queryKey: ["Modifiers", id],
      queryFn: async () => {
        if (!id) return null;
        return await getModifiersWithProduct(id);
      },
    });
  };