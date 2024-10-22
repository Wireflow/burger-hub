import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";  
import { useSearchProducts } from "../../src/queries/products/getbySearch";

import SearchInput from "../../src/components/ui/SearchInput";
import CardWrapper from "../../src/components/ui/card/CardWrapper";
import NotFound from "../../src/components/notFound/NotFound";

const Search = () => {
  const { query: initialQuery } = useLocalSearchParams();  
  const [searchTerm, setSearchTerm] = useState(initialQuery || '');  
  const { data: products, isLoading, error, refetch } = useSearchProducts(searchTerm);

  useEffect(() => {
    if (searchTerm) {
      console.log('Searching for:', searchTerm);
      refetch();
    }
  }, [searchTerm, refetch]);

  const handleSearch = (query) => {
    setSearchTerm(query);  
  };

  if (error) {
    Alert.alert("Error", "Something went wrong while fetching products.");
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} 
          columnWrapperStyle={styles.row} 
          renderItem={({ item }) => (
            <CardWrapper
              key={item.id}
              imageSource={{ uri: item.imageUrl || 'http://example.com/default-image.jpg' }}
              title={item.name || "Product Name"}
              price={`$${item.price?.toFixed(2)}`}
              height={190}
              width={160}
              id={item.id}
            />
          )}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <SearchInput onSearch={handleSearch} />
              {searchTerm && (
                <Text style={styles.resultText}>
                  Found {products?.length || 0} results 
                </Text>
              )}
            </View>
          )}
          ListEmptyComponent={() => (
            <NotFound
              icon="search"
              message1="No products found"
              message2="Try searching with a different keyword"
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    marginTop: 20,
    marginLeft: 15,
  },
  row: {
    justifyContent: 'space-around', 
    marginBottom: 5, 
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:20,
    textAlign:"center"
  },
});

export default Search;
