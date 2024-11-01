import { View, Text, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useSessionStore } from "@/src/store/useSessionStore";
import { Redirect } from "expo-router";
 
const index = () => {
  const { session } = useSessionStore();
 console.log("im session indesx",session)

  if (!session) {
    return <Redirect href={"/auth"} />;
  }

  return <Redirect href={"/(drawer)/main"} />;
};

export default index;