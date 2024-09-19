    import React from 'react';
    import { TouchableOpacity, Text, StyleSheet } from 'react-native';

    type ButtonProps = {
    title: string;
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'white';
    };

    const Button = ({ title, size, color }: ButtonProps) => {
    const backgroundColor = color === 'red' ? '#ff0000' : '#ffffff';
    const textColor = color === 'red' ? '#ffffff' : '#ff0000';
    const borderColor = '#ff0000'; // اللون الأحمر للحدود ثابت في جميع الحالات

    return (
        <TouchableOpacity
        style={[styles.button, { backgroundColor, borderColor }, styles[size]]}
        >
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
    };

    const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 25,  // حواف مستديرة
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 20,  // مسافة من جميع الجوانب
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    small: {
        width: 100,
    },
    medium: {
        width: 130,
    },
    large: {
        width: 350,
        borderRadius: 18, 
    },
    });

    export default Button;
