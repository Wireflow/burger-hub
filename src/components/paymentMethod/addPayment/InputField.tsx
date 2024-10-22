import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
type InputFieldProps = {
    control: any; 
    name: string;
    placeholder: string;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
    error?: any;
  };
  const InputField: React.FC<InputFieldProps> = ({ control, name, placeholder, keyboardType, error }) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </>
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginTop: -5,
  },
});
