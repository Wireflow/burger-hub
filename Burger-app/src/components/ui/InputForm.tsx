import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { StyleSheet } from "react-native";
import Input, { InputProps } from "./input";

type FormInputProps<T extends FieldValues> = Omit<
  InputProps,
  "value" | "onChangeText"
> & {
  control?: Control<T>;
  name: Path<T>;
  placeholder?: string;
};

function FormInput<T extends FieldValues>({
  placeholder,
  name,
  control,
  ...props
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Input
          {...props}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          error={error?.message}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#414852",
    lineHeight: 16,
  },
  errorMessage: {
    color: "red",
    fontSize: 10,
    textAlign: "right",
  },
  input: {
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#DDE2E8",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 50,
    overflow: "hidden",
    flexDirection: "row",
    padding: 16,
    marginTop: 7,
    color: "black",
    backgroundColor: "#FFFFFF",
  },
});

export default FormInput;
