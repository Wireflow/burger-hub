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
    width: '90%',
    height: 64, 
    paddingHorizontal: 16, 
    backgroundColor: 'white', 
    borderRadius: 53, 
    borderWidth: 2,
    borderColor: '#2C2C2E', 
    marginTop: 10, 
    marginLeft:15
  },
  input: {
    flex: 1,
    fontSize: 16, 
    color: '#FFFFFF', 
    marginTop: 2, 
  
    margin:8
  },
  icon: {
    width: 20, 
    height: 20, 
    margin:4,
    backgroundColor:'black',
    color:'black'
  },
});

export default SearchInput;
