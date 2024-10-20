import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
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
  }, [selectedTab, categories, setSelectedCategoryName]);

  if (error) {
    return <Text>Error fetching categories: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {isLoading && <ActivityIndicator size="large" color="red" style={{ alignItems: 'center', justifyContent: 'center' }} />}
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
          <ActivityIndicator size="large" color="red" />
        ) : productsByCategory && productsByCategory.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardContainer}
          >
            {productsByCategory.map(product => (
              <CardWrapper
                key={product.id}
                imageSource={{ uri: product.imageUrl || 'http://example.com/default-image.jpg' }}
                title={product.name || "Product Name"}
                price={`$${product.price?.toFixed(2)}`}
                height={210}
                width={200}
                id={product.id}
               
              />
            ))}
          </ScrollView>
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
    height: 300,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: 'space-between', 
    marginBottom: 10, 
    width: '70%',
  },
  tab: {
    padding: 5,
    alignItems: "center",
    width: '30%', 
    marginHorizontal: 5, 
  },
  tabText: {
    fontSize: 18,
    marginTop: 30,
  },
  underline: {
    marginTop: 10,
    height: 3,
    width: 90,
    backgroundColor: "#AF042C",
    borderRadius: 40,
  },
  content: {
    height: '75%',
    width: '100%',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  noProductsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});

export default Tabs;
