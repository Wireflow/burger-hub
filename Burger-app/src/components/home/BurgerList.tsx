import React,{useState} from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useGetProductsByCategoryId } from "../../queries/products/getProductsByCategoryId";
import CardWrapper from '../card/CardWrapper';
import SearchInput from '../ui/SearchInput';
import { useTabContext } from '../layout/TabContext';
import ProductSearch from './ProductSearch';
const BurgerList = () => {
 
  const { selectedTab, setSelectedTab, setSelectedCategoryName } = useTabContext();
  const { data: productsByCategory, isLoading: isLoadingProducts } = useGetProductsByCategoryId(selectedTab || 0);
  const [s, setS] = useState(false);
  if (s) {
    return <ProductSearch />;
  }


  return (
    <View style={styles.container}>
     
      <SearchInput onSearch={function (text: string): void {
            setS(!s);
        } } />
     
     <View style={styles.content}>
        {selectedTab !== null && productsByCategory && productsByCategory.length > 0 ? (
          productsByCategory.map(product => (
            <CardWrapper
              key={product.id}
              imageSource={{ uri: product.imageUrl || 'http://example.com/default-image.jpg' }}
              title={product.name || "Product Name"}
              price={`$${product.price?.toFixed(2)}`}
            />
          ))
        ) : (
          <Text style={styles.contentText}>No products found for this category.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    height: '85%',
    width: '100%',
  },
  contentText: {
    fontSize: 24,
  },
});

export default BurgerList;
