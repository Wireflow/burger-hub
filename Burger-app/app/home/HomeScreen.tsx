// HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <Text style={styles.logo}>Welcome!</Text>
      </SafeAreaView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
backgroundColor:"green"
  },
  logo: {
    color: '#000',
    fontSize: 30,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#a52a2a',
  },
});

export default HomeScreen;