import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useGetProductsByCategoryId } from "../../queries/products/getProductsByCategoryId";
import SearchInput from '../ui/SearchInput';
import { useTabContext } from '../layout/TabContext';
import ProductSearch from './ProductSearch';
import Buttonout from '../ui/Buttonout';
import Homes from './home';
import CardWrapper from '../ui/card/CardWrapper';

const BurgerList = () => {
  const { selectedTab } = useTabContext();
  const { data: productsByCategory, isLoading: isLoadingProducts } = useGetProductsByCategoryId(selectedTab || 0);
  const [s, setS] = useState(false);
  const [g, setG] = useState(false);

  if (s) {
    return <ProductSearch />;
  }
  if (g) {
    return <Homes />;
  }

  const handleButtonPress = () => {
    setG(!g);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Buttonout onPress={handleButtonPress} />
        <SearchInput 
          onSearch={(text) => {}} 
          onClick={() => setS(!s)} 
          color="#000" 
          backgroundColor="white" 
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
        {selectedTab !== null && productsByCategory && productsByCategory.length > 0 ? (
          productsByCategory.map(product => (
            <CardWrapper
              key={product.id}
              imageSource={{ uri: product.imageUrl || 'http://example.com/default-image.jpg' }}
              title={product.name || "Product Name"}
              price={`$${product.price?.toFixed(2)}`}
              height={190}
              width={160}
              id={product?.id}
            />
          ))
        ) : (
          <Text style={styles.contentText}>No products found for this category.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',  
  },
  content: {
    padding: 10,
    flexDirection: 'row', 
  },
  contentText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default BurgerList;
