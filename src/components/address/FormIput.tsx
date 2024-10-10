import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { Controller } from 'react-hook-form';

type Props = {
  text: string;
  control: any;
  name: string;
  placeholder: string;
  description?: string; // Optional description prop
  secureTextEntry?: boolean; // Optional for password inputs
  onFocus?: () => void; // Optional onFocus handler
  onBlur?:
  | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
  | undefined;
};

const FormInput: React.FC<Props> = ({
  text,
  control,
  name,
  placeholder,
  description,
  secureTextEntry = false,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => setIsFocused(true);
  const handleOnBlur = () => setIsFocused(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <TextInput
              style={[styles.input, error && styles.errorInput]}
              value={value}
              
              onChangeText={onChange}
              onBlur={onBlur?onBlur:handleOnBlur}
              onFocus={handleOnFocus}
              placeholder={placeholder}
              placeholderTextColor="#A9A9A9" 
              secureTextEntry={secureTextEntry}
              {...props}
            />
            {error && <Text style={styles.errorMessage}>{error.message}</Text>}
          </>
        )}
      />
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginBottom: 15, // Spacing between inputs
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#091e3a',
    marginBottom: 5, // Spacing below the label
  },
  input: {
    borderRadius: 10,
    borderColor: '#91a1b6',
    borderWidth: 1,
    padding: 16,
    height: 50,
    fontSize: 16,
    color: 'black',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    textAlign: 'right',
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: '#6c757d', // Gray color for description
    marginTop: 3,
  },
});

export default FormInput;