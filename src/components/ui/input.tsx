import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
 import { Ionicons } from "@expo/vector-icons";
 import { textStyles } from "../themed";

export interface InputProps extends TextInputProps {
  label?: string;
  description?: string;
  placeholder?: string;
  value?: string | any;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
  errorStyle?: object;
  searchBox?: React.ReactNode;
  style?: ViewStyle;
  icon?: (focused: boolean) => React.ReactNode;
  inputStyle?: ViewStyle;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

const Input: React.FC<InputProps> = ({
  label,
  description,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
  errorStyle,
  style,
  inputStyle,
  onBlur,
  multiline,
  searchBox,
  icon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
 

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[textStyles.small, styles.label]}>{label}</Text>}
      <View style={[styles.inputContainer, isFocused && styles.focusedInput]}>
        {icon ? (
          <View style={styles.iconContainer}>{icon(isFocused)}</View>
        ) : searchBox ? (
          <View style={styles.searchIconContainer}>
            <Ionicons
              name="search-outline"
              size={24}
              color={isFocused ? "white": "black"}
            />
          </View>
        ) : null}
        <TextInput
          style={[
            styles.input,
            multiline && styles.multilineInput,
            icon || searchBox ? styles.inputWithIcon : null,
            inputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={'#fff'}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={handleFocus}
          multiline={multiline}
          onBlur={onBlur ? onBlur : handleBlur}
          {...props}
        />
      </View>
      {description && <Text style={styles.description}>{description}</Text>}
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginBottom: 8,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor:'black',
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  focusedInput: {
    borderColor: 'black',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
    paddingVertical: 12,
    paddingHorizontal: 16,
    minHeight: 48,
  },
  inputWithIcon: {
    paddingLeft: 48,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  iconContainer: {
    position: "absolute",
    left: 12,
    top: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIconContainer: {
    position: "absolute",
    left: 12,
    top: 12,
  },
  description: {
    ...textStyles.xsmall,
    marginTop: 6,
    color: 'black',
  },
  error: {
    color: "red",
    marginTop: 4,
  },
});

export default Input;