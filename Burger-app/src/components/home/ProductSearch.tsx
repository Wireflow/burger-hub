// src/components/ProductSearch.tsx
import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import SearchInput from '../ui/SearchInput';
import { useSearchProducts, Product } from '../../queries/products/getbySearch';
import CardWrapper from '../card/CardWrapper'; 

const ProductSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { data: products, isLoading, error } = useSearchProducts(searchTerm);

    const handleSearch = (text: string) => {
        setSearchTerm(text);
    };

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error fetching products.</Text>;

    return (
        <View style={styles.container}>
            <SearchInput onSearch={handleSearch} />
            {products && products.length > 0 ? (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }: { item: Product }) => (
                        <CardWrapper 
                            key={item.id}
                            imageSource={{ uri: item.imageUrl || 'http://example.com/default-image.jpg' }} 
                            title={item.name || "Product Name"} 
                            price={`$${item.price?.toFixed(2)}`} 
                        />
                    )}
                />
            ) : (
                <Text style={styles.te}>{searchTerm ? 'No products found.' : 'search by name'}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    te:{
      textAlign:'center',
      marginTop:270
    }
});

export default ProductSearch;
