import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { string } from 'zod';
interface Prop{
    title:string
}
const Header = ({ title }:Prop) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={handleBackPress} style={styles.backButton} >
       <Image source={require("@/assets/icons/back-left.png")} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom:5
  },
  backButton: {
    marginRight: 50,
    alignItems:"center",
    display:"flex"
  
  },
  backButtonText: {
   fontWeight:"200",
    fontSize: 40,


  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems:"center"
  },
});

export default Header;