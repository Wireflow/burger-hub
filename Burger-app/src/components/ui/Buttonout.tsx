import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, GestureResponderEvent } from 'react-native';

interface ButtonoutProps {
  onPress: (event: GestureResponderEvent) => void; 
}

const Buttonout: React.FC<ButtonoutProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{"<"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white', 
    width: 50,
   
  },
  button: {
    backgroundColor: 'white',
    padding: 10, 
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    padding:10
  },
});

export default Buttonout;
