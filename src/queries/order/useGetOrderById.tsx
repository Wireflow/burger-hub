import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { useOrderStore } from "@/src/store/oder/useOrderStore";
import { useSessionStore } from "@/src/store/useSessionStore";
import { useQuery } from "@tanstack/react-query";

export type OrderWithAddress = Row<"Orders"> & {
  Addresses: Row<"Addresses">;
  User: Row<"User">;
  Products: Row<"Order_Items">[];
};

export const useGetOrderById = (id: number) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      const order = await GetOrderById(id);
      return order;
    },
  });
};

const GetOrderById = async (orderId: number): Promise<OrderWithAddress[]> => {
  try {
    const { data: orders, error } = await supabase
      .from("Orders")
      .select(
        `
        *,
        Addresses:address_id(*),
        User:user_id(*),
        Products:Order_Items(*)
      `
      )
      .eq("id", orderId);

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
