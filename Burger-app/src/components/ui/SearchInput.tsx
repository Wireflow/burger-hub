// src/components/SearchInput.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // تأكد من استيراد الأيقونة

interface SearchInputProps {
    onSearch: (text: string) => void; 
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [text, setText] = useState<string>(''); 

    const handleChangeText = (inputText: string) => {
        setText(inputText); 
        onSearch(inputText); 
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="search" size={20} color="#333" style={styles.icon} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={text} 
                onChangeText={handleChangeText} 
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
        marginBottom: 10,
    },
    input: {
        flex: 1,
        fontSize: 16, 
        color: '#333', 
        marginTop: 2, 
        margin: 10,
        marginBottom: 5,
    },
    icon: {
        marginRight: 10, // لضبط المسافة بين الأيقونة وحقل الإدخال
    },
});

export default SearchInput;
