import { StyleSheet } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HeaderBackButton } from "@react-navigation/elements";

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack >
        <Stack.Screen name="[id]"        options={{
          headerStyle:{ backgroundColor:'#F6F6F9'},
          headerLeft: () => (
            <HeaderBackButton label="Cancel" onPress={() => router.back()} />
          ),
          title: "",
        }}/>
      </Stack>
    </GestureHandlerRootView>
  );
};

export default _layout;

const styles = StyleSheet.create({});
