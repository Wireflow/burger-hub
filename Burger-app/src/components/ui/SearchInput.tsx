import React from "react";
import { View, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";

const SearchInput = () => {
  return (
    <View style={styles.container}>
           <TouchableOpacity>
        <Image source={require('@/assets/images/search.png')} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search "
        placeholderTextColor="black"
      />
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 64, 
    paddingHorizontal: 16, 
    backgroundColor: '#E0E0E0', 
    borderRadius: 70, 
    marginTop: 10, 
    
    marginBottom:10
  },
  input: {
    flex: 1,
    fontSize: 16, 
    color: '#333', 
    marginTop: 2, 
    margin:10,
    marginBottom:5
  },
  icon: {
    width: 30, 
    height: 30, 
    margin:4,
    borderRadius: 100, 
    backgroundColor:'#E0E0E0'
  },
});

export default SearchInput;
