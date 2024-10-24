import { useCartStore } from "@/src/store/cart/cartStore";
import { Option } from "@/src/types/product/Customize";
import { Product } from "@/src/types/product/Product";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModelSetNote from "./ModelSetNote";
const {width,height}=Dimensions.get("screen");
const ListItems = () => {
  const { cart } = useCartStore((state) => state);
  const products: Product[] = cart.products;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>

      <ScrollView>
        {products &&
          products.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image
                src={
                  item.imageUrl
                    ? item.imageUrl
                    : require("@/assets/images/Mask Group.png")
                }
                style={styles.image}
              />
              <View style={styles.details}>
                <View style={styles.desc}>
                  <Text style={styles.quantity}>{item.quantity}x</Text>
                  <Text style={styles.name}>{item.name}</Text>
                </View>

                {item.options &&
                  item.options.map((optis) => (
                    <TouchableOpacity>
                      <Text key={optis.modifireId} style={styles.optis}>
                        {optis?.modifierName}
                      </Text>
                      {optis.modifireOptions &&
                        optis.modifireOptions.map((option) => (
                          <TouchableOpacity
                            key={option.modifierOptionId}
                            style={styles.desc2}
                          >
                            <Text style={{ color: "#AF042C" }}>
                              ${option.modifierOptionPrice || 0}
                            </Text>
                            <Text>{option.modifierOptionName}</Text>
                          </TouchableOpacity>
                        ))}
                    </TouchableOpacity>
                  ))}
                <Text style={styles.price}>$ {item.price}</Text>
              </View>
              <ModelSetNote productId={item.id} />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:height*0.3
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
    marginTop: 4,
  },
  desc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
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
