import React, { useState } from 'react';
import { Text, TextInputFocusEventData } from 'react-native';
import { NativeSyntheticEvent, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-paper';
 export interface InputProps extends TextInputProps {
    label?: string;
    description?: string;
    placeholder?: string;
    value?: string | any;
    onChangeText?: (text: string) => void;
    error?: string;
    onBlur?:
      | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
      | undefined;
  }
const InputUi = ({label,description,placeholder,error,onBlur,value,onChangeText}:InputProps) => {
    const [userError, setUserError] = useState(false);
    return (
      <View>
        <TextInput
    label={label}
     style={{ margin: 'auto',backgroundColor:'' ,width:'80%',marginTop:15}}
    activeUnderlineColor="black"
    underlineColor="black"
    placeholder={placeholder}
    onBlur={onBlur}
    onChangeText={onChangeText}
    
  />
   {error && <Text style={{textAlign:'right', right:50,color:'red'}}>{error}</Text>}

        </View>
    );
};
 
export default InputUi;