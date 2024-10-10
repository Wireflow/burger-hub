import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { useOrderStore } from "@/src/store/oder/useOrderStore";
import { useSessionStore } from "@/src/store/useSessionStore";
import { useQuery } from "@tanstack/react-query";

export type OrderWithAddress = Row<"Orders"> & {
  Addresses: Row<"Addresses">
  User:Row<"User">;
  products: Row<"Order_Items">[];
};
export const useGetAllOrders = (id: string) => {
  return useQuery({
    queryKey: ["orders", "address", id],
    queryFn: async () => {
      const order = await GetAllOrders(id);
      return order;
    },
  });
};

const GetAllOrders = async (userId: string): Promise<OrderWithAddress[]> => {
  try {
    const { data: orders, error } = await supabase
      .from("Orders")
      .select(`
        *,
        Addresses:address_id(*),
        User:user_id(*)
      `)
      .eq("user_id", userId as string);

    if (error) {
      console.error("Error in fetching orders:", error);
      return [];
    }

    console.log("Fetched orders:", orders);

    return orders as unknown as OrderWithAddress[];
  } catch (error: any) {
    console.error("Error in fetching orders:", error);
    return [];
  }
};