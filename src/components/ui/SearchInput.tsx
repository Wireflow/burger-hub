import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { usePathname, router } from "expo-router";
import { useCustomToast } from "@/src/hooks/useCustomToast";
import { usesearchStore } from "@/src/store/search/searchStore";
import Input from "./input";
import SearchProductScreen from "../home/search/SearchProductScreen";
 
const SearchInput: React.FC<{ color?: string, backgroundColor?: string }> = ({ color = '#333', backgroundColor = 'white' }) => {
     const pathname = usePathname();
    const { searchTerm, setSearchTerm, clearSearchTerm } = usesearchStore();
 

    console.log("im her in search",pathname.startsWith("/product/search"))

 
   
    const handleSearchPress = () => {
    
            if (pathname.startsWith("/product/search")) {
                console.log("im her in search",pathname.startsWith("/(drawer)/product/search"))
            } else {
              router.push(`/product/search`);
          }
        
     };

    return (
        <View style={[styles.container, { backgroundColor }]}>
              <Input
                label=""
              secureTextEntry={false}
              style={styles.input}
              placeholder={'Search...'}
              placeholderTextColor={"black"} 
              searchBox={searchTerm && pathname.startsWith("/product/search")  ? false :true}
              onChangeText={setSearchTerm}
              value={searchTerm}
               border
              onPress={handleSearchPress}
              autoFocus={pathname.startsWith("/product/search")}
             />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 64,
        borderRadius: 70,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:'red',
        position:'relative',
        justifyContent:'flex-end',
        borderWidth:0

    },
    input: {
         fontSize: 16,
        marginTop: 2,
        margin: 15,
        marginBottom: 5,
        width:'80%',
        borderWidth:0
     },
  
});

export default SearchInput;
