
import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

interface SearchInputProps {
    onSearch: (text: string) => void;   
    onClick?: () => void;                
    color?: string;                      
    backgroundColor?: string;           
}

const SearchInput: React.FC<SearchInputProps> = ({
    onSearch,
    onClick,
    color = '#333',                      
    backgroundColor = 'white'          
}) => {
    const [text, setText] = useState<string>('');

    const handleChangeText = (inputText: string) => {
        setText(inputText);
        onSearch(inputText);
    };

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor }]} onPress={onClick}>
            <Icon name="search" size={20} color={color} style={styles.icon} />
            <TextInput
                style={[styles.input, { color }]}
                placeholder="Search.."
                placeholderTextColor="#999" 
                value={text}
                onChangeText={handleChangeText}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        height: 64,
        paddingHorizontal: 16,
        borderRadius: 70,
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginTop: 2,
        margin: 10,
        marginBottom: 5,
    },
    icon: {
        marginRight: 10,
    },
});

export default SearchInput;