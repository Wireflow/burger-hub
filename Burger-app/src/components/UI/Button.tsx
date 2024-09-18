import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  size: 'small' | 'medium' | 'large';
  color: 'red' | 'white';  
};

const Button = ({ title, size, color }: ButtonProps) => {
  const buttonStyles = [
    styles.button,
    styles[size],  
    color === 'red' ? styles.redButton : styles.whiteButton,  
  ];

  const textStyles = color === 'red' ? styles.redText : styles.whiteText;

  return (
    <TouchableOpacity style={buttonStyles}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 2,
  },
  small: {
    width: 100,
  },
  medium: {
    width: 150,
  },
  large: {
    width: 200,
  },
  redButton: {
    backgroundColor: 'transparent',
    borderColor: 'red',
  },
  whiteButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
  },
  redText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Button;
