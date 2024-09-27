// src/components/ProductSearch.tsx
import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import SearchInput from '../ui/SearchInput';
import { useSearchProducts, Product } from '../../queries/products/getbySearch';
 import Buttonout from '../ui/Buttonout';
import Homes from './home';
import CardWrapper from '../ui/card/CardWrapper';
const ProductSearch: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const { data: products, isLoading, error } = useSearchProducts(searchTerm);
    const [g,setG] = useState(false)
    const handleSearch = (text: string) => {
        setSearchTerm(text);
    };
    if(g){
        return <Homes />
      }
    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error fetching products.</Text>;
    const handleButtonPress = () => {
        setG(!g)
        };
      
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
            <Buttonout
      onPress={handleButtonPress}
      />
            <SearchInput onSearch={handleSearch} />
            </View>
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
                            height={190}
                            width={160}
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
    },  searchContainer: {
        flexDirection: 'row', // لضبط التخطيط أفقيًا
        alignItems: 'center', // لضبط العناصر في المنتصف
        marginBottom: 16,
        backgroundColor: '#E0E0E0',  // لإضافة مسافة أسفل حقل البحث
      },
});

export default ProductSearch;
