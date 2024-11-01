import { useCartStore } from "@/src/store/cart/cartStore";
 import { Product } from "@/src/types/product/Product";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";
 import { SafeAreaView } from "react-native-safe-area-context";
import CardProduct from "./CardProduct";
const {width,height}=Dimensions.get("screen");
const ListItems = () => {
  const { cart } = useCartStore((state) => state);
  const products: Product[] = cart.products;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>
      <SafeAreaView style={{flex:1}}>

      <ScrollView>
        {products &&
          products.map((item) => (
          <CardProduct item={item}/>
          ))}
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:height*0.3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 10,
    elevation: 2,
    

  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
    color: "#AF042C",
    marginTop: 2,
  },
  desc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 170,
  },
  optis: {
    fontSize: 18,
    color: "black",
    marginTop: 4,
  },
  desc2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    left: 10,
  },
});

export default ListItems;
