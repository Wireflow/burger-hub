import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useGetAllCategories } from '../../queries/products/gitAllCategores'; // تأكد من المسار الصحيح
import { category } from '../../types/schema/category'; // تأكد من المسار الصحيح
import CardWrapper from "../card/CardWrapper";
import { useGetProductsByCategoryId } from '../../queries/products/getProductsByCategoryId';

const Tabs = () => {
    const { data: categories, error, isLoading } = useGetAllCategories();
    const [selectedTab, setSelectedTab] = useState<number | null>(null);
    const { data: productsByCategory, isLoading: isLoadingProducts } = useGetProductsByCategoryId(selectedTab || 0);

    useEffect(() => {
        if (categories && categories.length > 0) {
            setSelectedTab(categories[0].id);
        }
    }, [categories]);

    if (isLoading || isLoadingProducts) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error fetching categories: {error.message}</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                {categories?.map((categoryItem: category) => (
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
                    <Text style={styles.contentText}>
                        No products found for this category.
                    </Text>
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
        position: 'relative',
        marginTop: 30,
        margin: 12
    },
    tabContainer: {
        display: 'flex',
        flexDirection: "row",
        marginBottom: 0,
        width: '80%',
        justifyContent: 'space-around',
    },
    tab: {
        padding: 5,
        alignItems: "center",
        width: '40%',
    },
    tabText: {
        fontSize: 22,
    },
    underline: {
        marginTop: 15,
        height: 3,
        width: 134,
        backgroundColor: "#AF042C",
        borderRadius: 40,
    },
    content: {
        height: '85%',
        width: '100%',
    },
    contentText: {
        fontSize: 24,
    },
});

export default Tabs;
