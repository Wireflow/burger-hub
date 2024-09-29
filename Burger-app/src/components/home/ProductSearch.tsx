import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet  ,ActivityIndicator, } from 'react-native';
import SearchInput from '../ui/SearchInput';
import { useSearchProducts, Product } from '../../queries/products/getbySearch';
import Buttonout from '../ui/Buttonout';
import Homes from './home';
import CardWrapper from '../ui/card/CardWrapper';
import NotFound from '../notFound/NotFound';

const ProductSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { data: products, isLoading, error } = useSearchProducts(searchTerm);
    const [g, setG] = useState(false);

    const handleSearch = (text: string) => {
        setSearchTerm(text);
    };

    if (g) {
        return <Homes />;
    }


    if (error) return <Text>Error fetching products.</Text>;

    const handleButtonPress = () => {
        setG(!g);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Buttonout onPress={handleButtonPress} />
                <SearchInput onSearch={handleSearch} />
            </View>
            {isLoading && <ActivityIndicator size="large" color="red" style={{ alignItems: 'center', justifyContent: 'center' }} />}
            {products && products.length > 0 ? (
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
                    {products.map((item: Product) => (
                        <CardWrapper
                            key={item.id}
                            imageSource={{ uri: item.imageUrl || 'http://example.com/default-image.jpg' }} 
                            title={item.name || "Product Name"} 
                            price={`$${item.price?.toFixed(2)}`} 
                            height={190}
                            width={160}
                            id={item?.id}
                        />
                    ))}
                </ScrollView>
            ) : (
                <Text style={styles.t} >{searchTerm ? <NotFound
                    icon="search" 
                    message1="Item not found"
                    message2='Try searching the item with a different keyword'
                     /> :<NotFound
                     icon="search" 
                     message1="search by name"
                     message2=''
                      />}
                     </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    t:{
        textAlign: 'center',
        marginRight:10

    },
  
    searchContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 16,
        backgroundColor: 'white', 
    },
    content: {
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
});

export default ProductSearch;
