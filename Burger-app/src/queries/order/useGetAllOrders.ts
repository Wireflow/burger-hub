import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { useOrderStore } from "@/src/store/oder/useOrderStore";
import { useSessionStore } from "@/src/store/useSessionStore";
import { useQuery } from "@tanstack/react-query";

export type OrderWithAddress = Row<"Orders"> & {
  address: Row<"Addresses">;
  products: Row<"Order_Items">[];
};
export const useGetAllOrders = () => {
  const setGlobalOrders = useOrderStore((state) => state.setGlobalOrders);
    return useQuery({
      queryKey: ["orders"],
      queryFn:async()=>{
        const order=await GetAllOrders();
        setGlobalOrders(order);
        return order;
      } 
    });
  };
  
const GetAllOrders = async (): Promise<OrderWithAddress[]> => {
  try {
    const { session } = useSessionStore();
    const userId = session?.id;

    const { data: orders, error } = await supabase
      .from("Orders")
      .select("*")
      .eq("user_id", userId as string);

    if (error) {
      console.error("Error in fetching orders:", error);
      return [];
    }

    return orders as unknown as OrderWithAddress[];
   
   
  } catch (error: any) {
    console.error("Error in fetching orders:", error);
   
    return [];
  }
};


