import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import NotFound from "@/src/components/notFound/NotFound";
import CardWrapper from "../ui/card/CardWrapper";
import { useGetFavoriteProductsByUserId } from "@/src/queries/products/getFavorite";
const Favorites = () => {
  const {
    data: favoriteProducts,
    isLoading,
    error,
  } = useGetFavoriteProductsByUserId();

  if (isLoading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  const handlePress = () => {
    console.log("ok");
  };
  return (
    <View style={styles.content}>
      {favoriteProducts && favoriteProducts.length > 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardContainer}>
            {favoriteProducts.map((product) => (
              <CardWrapper
                key={product.id}
                imageSource={{
                  uri:
                    product.imageUrl || "http://example.com/default-image.jpg",
                }}
                title={product.name || "Product Name"}
                price={`$${product.price?.toFixed(2)}`}
                height={200}
                width={190}
                id={product.id}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.noProductsText}>
          <NotFound
            icon="heart-o"
            message1="No favorites"
            message2="Choose your favorite items by hitting the heart"
            buttonTitle="Start browsing"
            onButtonPress={handlePress}
          />
        </Text>
      )}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  content: {
    padding: 16,
    backgroundColor: "white",
  },
  cardContainer: {
    flexDirection: "row",
  },
  noProductsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
  },
});
