import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import Tabs from "./Tabs";
import Button from "../ui/Button";
import { router } from "expo-router";
import { useTabContext } from "../layout/TabContext";
import SearchInput from "../ui/SearchInput";
import { usesearchStore } from "@/src/store/search/searchStore";
import { removeTeailingS } from "@/hooks/removeTeailingS";
const {width,height}=Dimensions.get("screen");
const Homes: React.FC = () => {
  const { selectedCategoryName } = useTabContext();
  const { setSearchTerm, clearSearchTerm } = usesearchStore();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Delicious</Text>
            <Text style={styles.titleText}>burgers for you</Text>
            <SearchInput color="#000" backgroundColor="#E0E0E0" />
          </View>
        </View>

        <Tabs />
        <View style={styles.buttonContainer}>
          <Button
            size="large"
            color="red"
            title={` View All ${selectedCategoryName} `}
            onClick={async () => {
              clearSearchTerm();
              let title = await removeTeailingS(selectedCategoryName);
              console.log(title, "im title after slice");
              setSearchTerm(title);
              router.push("/product/search");
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    width:width
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    marginLeft: 25,
    height: 120,
    paddingHorizontal: 10,
  },
  titleContainer: {
    width: "90%",
  },
  titleText: {
    fontSize: 40,
    color: "black",
    marginBottom: 5,
  },
  buttonContainer: {
    position: "absolute",
    paddingHorizontal: 25,
    bottom: 40,
    width:width
  },
});

export default Homes;
