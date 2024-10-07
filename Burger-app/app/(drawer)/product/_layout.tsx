import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: true,
      }}
    />
  );
};

export default _layout;