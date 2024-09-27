import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useGetAllCategories } from "../../queries/products/gitAllCategores";
import { category } from "../../types/schema/category";
 import { useGetProductsByCategoryId } from "../../queries/products/getProductsByCategoryId";
import { useTabContext } from '../layout/TabContext';
import CardWrapper from "../ui/card/CardWrapper";

const Tabs = () => {
  const { data: categories, error, isLoading } = useGetAllCategories();
  const { selectedTab, setSelectedTab, setSelectedCategoryName } = useTabContext();
  const { data: productsByCategory, isLoading: isLoadingProducts } = useGetProductsByCategoryId(selectedTab || 0);

  useEffect(() => {
    if (categories && categories.length > 0 && selectedTab === null) {
      setSelectedTab(categories[0].id);
      if (categories[0].name) {
        setSelectedCategoryName(categories[0].name); 
      }
    }
  }, [categories, selectedTab, setSelectedTab, setSelectedCategoryName]);

  useEffect(() => {
    if (selectedTab !== null) {
      const selectedCategory = categories?.find(cat => cat.id === selectedTab);
      if (selectedCategory && selectedCategory.name) {
        setSelectedCategoryName(selectedCategory.name); 
      }
    }
  });

  

  if (error) {
    return <Text>Error fetching categories: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {categories && categories.map((categoryItem: category) => (
          <TouchableOpacity
            key={categoryItem.id}
            onPress={() => setSelectedTab(categoryItem.id)}
            style={styles.tab}
          >
            <Text style={[styles.tabText, { color: selectedTab === categoryItem.id ? '#AF042C' : 'black' }]}>
              {categoryItem.name}
            </Text>
            {selectedTab === categoryItem.id && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>
        {isLoadingProducts ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : productsByCategory && productsByCategory.length > 0 ? (
          productsByCategory.map(product => (
            <CardWrapper
              key={product.id}
              imageSource={{ uri: product.imageUrl || 'http://example.com/default-image.jpg' }}
              title={product.name || "Product Name"}
              price={`$${product.price?.toFixed(2)}`}
              height={180}
              width={150}
              id={product?.id}
            />
          ))
        ) : (
          <Text style={styles.noProductsText}>No Product found</Text>
        )}
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'baseline',
    width: "90%",
    marginTop: 30,
    margin: 12,
     height:300
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: 0,
    width: '70%',
  },
  tab: {
    padding: 5,
    alignItems: "center",
    width: '35%',
  },
  tabText: {
    fontSize: 18,
  },
  underline: {
    marginTop: 10,
    height: 3,
    width: 134,
    backgroundColor: "#AF042C",
    borderRadius: 40,
  },
  content: {
    height: '75%',
    width: '100%',
   },
  contentText: {
    fontSize: 24,
  },noProductsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});

export default Tabs;
