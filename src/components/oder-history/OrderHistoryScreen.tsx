import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import NoOrder from "./NoOrder";
import { useGetAllOrders } from "@/src/queries/order/useGetAllOrders";
import { useSessionStore } from "@/src/store/useSessionStore";
import Card from "../ui/card/Card";
import { formatAddress } from "@/src/util/addressFormat";
import { formatDate, formatDateTime } from "@/src/util/DateFormat";
import { OrderWithAddress } from "@/src/queries/order/useGetAllOrders";
import Header from "../ui/Header";
import { useFocusEffect } from "expo-router";
export default function OrderHistoryScreen() {
  const { session } = useSessionStore();
  const userId = session?.id;
  const {
    data: orders,
    error,
    isLoading,
    refetch,
  } = useGetAllOrders(userId as string);
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"#AF042C"}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></ActivityIndicator>
    );
  }

  if (error) {
    return <Text>Error loading orders</Text>;
  }

  if (!orders || orders.length === 0) {
    return <NoOrder />;
  }

  return (
    <ScrollView>
      {orders.map((order) => (
        <Card key={order.id} height={147} width={331}>
          <View style={styles.container}>
            <View >
              <Text style={styles.orderText}>
                $ {order.totalAmount ?? "Not found: totalAmount"}
              </Text>
              <Text style={styles.orderText}>
                {order.totalQuantity ?? "Not found: totalQuantity"} items
              </Text>
            </View>

            <View>
              {order.order_type == "Delivery" ? (
                <View style={styles.orderDetails}>
                  <Text style={styles.orderText}>
                    {" "}
                    {order.deliveryAt
                      ? formatDate(new Date(order.deliveryAt))
                      : "Delivery date not available"}{" "}
                  </Text>
                  <Text style={styles.orderText}>Delivered to</Text>
                  <Text style={styles.address}>
                    {formatAddress({ ...order.Addresses })}
                  </Text>
                </View>
              ) : (
                <View style={styles.orderDetails}>
                  <Text style={styles.orderText}>
                    {" "}
                    {order.deliveryAt
                      ? formatDate(new Date(order.created_at))
                      : "Delivery date not available"}{" "}
                  </Text>
                  <Text style={styles.orderText}>Pick up at</Text>
                  <Text style={styles.address}>
                    {formatDateTime(new Date(order.created_at))}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text></Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row-reverse",
    display:"flex",
    justifyContent: "space-around",
    padding: 10,
  },
  address: {
    opacity: 0.5,
    lineHeight: 19,
    color: "#000000",
    fontWeight: "400",
    fontSize: 15,
    width: 281,
  },
  orderDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  orderItem: {
    marginBottom: 10,
  },
  orderText: {
    fontSize: 18,
    fontWeight: "600",
  },
});