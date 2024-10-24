import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useNavigation } from "expo-router";  
import { useSearchProducts } from "@/src/queries/products/getbySearch";
import CardWrapper from "../../ui/card/CardWrapper";
import SearchInput from "../../ui/SearchInput";
import NotFound from "../../notFound/NotFound";
import { usesearchStore } from "@/src/store/search/searchStore";
import Header from "../../ui/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getProductsByCategoryId } from "@/src/queries/products/getProductsByCategoryId";
 
 
const SearchProductScreen = () => {
   const { searchTerm, setSearchTerm, clearSearchTerm } = usesearchStore();
   const navigation = useNavigation();

   const { data: products, isLoading, error, refetch } = useSearchProducts(searchTerm);
  const goBack =()=>{
    clearSearchTerm();
    navigation.goBack()
  }
 
  return (
     <SafeAreaView style={{  flex: 1,backgroundColor:'#EFEEEE' }}>
                <Header onBack={goBack}  backgroundColorCode="#EFEEEE" headerSearch/>

      <View style={{backgroundColor:'#F9F9F9',borderRadius:30,height:'100%',width:'100%'}}> 
      

        {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : ( <> 
        {
          products && (        <Text style={styles.found}> { products?.length > 0 ? `Found ${products?.length} results `:''}</Text>
          )
        }
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
            height={220}
            width={160}
            id={item.id}

             
          />
        )}
    
        ListEmptyComponent={() => (
          <NotFound
            icon="search"
            message1="Item not found"
            message2="Try searching the item with a different keyword."
          />
        )}
      />   
   </>
      )}
      
      </View>
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
  },found:{
    height:80,
    textAlign:'center',
    padding:'auto',
    textAlignVertical:'center',
    color:'#000000',
    fontWeight:'bold',
    fontSize:25

  }
});

export default SearchProductScreen;
