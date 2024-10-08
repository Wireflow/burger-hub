import { StyleSheet } from "react-native";
import React, { createContext, useContext as useReactContext } from "react";
import { useGetAllOrders } from "@/src/queries/order/useGetAllOrders";
import { orderSchemaType } from "@/src/types/validations/order";
import { Row } from "@/src/services/supabase/table.types";

const OrdersContext = createContext<Row<"Orders">[] | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: orders, error } = useGetAllOrders();

  if (error) {
    console.error("Error fetching orders:", error);
  }

  return (
    <OrdersContext.Provider value={orders ?? undefined}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useReactContext(OrdersContext);

  return context;
};

const styles = StyleSheet.create({});
