import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
type SubmitButtonProps = {
    onPress: () => void; 
    title: string; 
  };

  const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#AF042C',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
