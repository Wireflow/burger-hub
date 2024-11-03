import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
  return (
    <>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
