import React from "react";
  import {  ProductDetailsScreen } from "@/src/components/product/details/ProductDetailsScreen";
import { router, Stack } from "expo-router";
 import { HeaderBackButton } from "@react-navigation/elements";
  import AddProductFavorite from "@/src/components/product/details/AddProductFavorite";

const ProductDetails = () => {

  return (
    <>

<Stack.Screen
        options={{
          headerStyle:{ backgroundColor:'#FFFFFF'},
          headerLeft: () => (
            <HeaderBackButton label="Cancel" onPress={() => router.back()} />
          ),
          title: "",
          headerRight:() => (
 <AddProductFavorite/>    ),
          headerShown:true
        }}
      />
     <ProductDetailsScreen/>
    </>
  );
};

 

export default ProductDetails;