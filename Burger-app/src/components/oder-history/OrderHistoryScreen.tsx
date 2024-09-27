import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NoOrder from "./NoOrder";
import { useOrders } from "../context/useContext";

export default function OrderHistoryScreen() {
  const orders = useOrders();

  if (!orders || orders.length === 0) {
    return <NoOrder />;
  }

  return (
    <View style={styles.container}>
      {orders?.map((order) => (
        <View key={order.id} style={styles.orderItem}>
          <Text style={styles.orderText}>
            {`${order.totalAmount ?? "not found totalAmount"}, ${
              order.totalQuantity ?? "not found totalQuantity"
            }`}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  orderItem: {
    marginBottom: 10, // Space between orders
  },
  orderText: {
    color: "black",
  },
});
