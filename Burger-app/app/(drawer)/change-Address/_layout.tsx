import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderBackButton } from "@react-navigation/elements";
import { router, Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack  screenOptions={{headerShown:false}}/>
  );
};

export default _layout;

const styles = StyleSheet.create({});
