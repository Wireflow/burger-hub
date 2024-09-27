import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
    title: string;
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'white';
    onClick?: () => void;
};

const Button = ({ title, size, color, onClick }: ButtonProps) => {
    const textColor = color === 'red' ? '#ffffff' : '#AF042C';
    const borderColor =   color === 'red' ? '#ffffff' : '#AF042C'; 
    const backgroundColor = color === 'red' ? '#AF042C' : '#ffffff'; 

    return (
        <TouchableOpacity
            style={[styles.button, { borderColor, backgroundColor }, styles[size]]} // Use backgroundColor here
            onPress={onClick}
        >
            <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
      
        borderWidth: 1,
        borderRadius: 30,  
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: "auto",  
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    small: {
        width: 100,
    },
    medium: {
        width: 130,
    },
    large: {
        width: 250,
        borderRadius: 18,
        height: '100%',
    },
});

export default Button;