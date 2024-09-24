import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    />
  );
};

export default _layout;