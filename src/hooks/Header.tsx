import React, { Component, createContext, useContext } from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Col, Grid } from "react-native-easy-grid";
import { useNavigation } from "@react-navigation/native";
import AddProductFavorite from "../product/details/AddProductFavorite";

type HeaderProps = {
  style?: StyleProp<ViewStyle>;
  title?: string;
  backgroundColorCode:string;
  headerRight?: React.ReactElement;
};

const headerHeight = 130;

type HeaderContextType = {
  goBack: () => void;
};

const HeaderContext = createContext<HeaderContextType | null>(null);

function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("Header must be used within a HeaderProvider");
  }
  return context;
}

function Header({ style, title,backgroundColorCode,headerRight }: HeaderProps) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const goBack = () => {
    navigation.goBack();
  };

  const contextValue: HeaderContextType = {
    goBack,
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      <View
        style={[
          style,
          {
            paddingTop: insets.top,
            height: headerHeight,
            backgroundColor:backgroundColorCode
            
          },
        ]}
      >
        <Grid style={styles.container}>
          <Header.BackButton />

          {title && <Text style={[styles.title]}>{title}</Text>}
 {headerRight}
         </Grid>
      </View>
    </HeaderContext.Provider>
  );
}

Header.BackButton = function HeaderBackButton() {
  const { goBack } = useHeader();

  return (
    <Col size={0.2}>
      <TouchableOpacity onPress={goBack} style={styles.button}>
        <Entypo name="chevron-thin-left" size={23} color="black" />
      </TouchableOpacity>
    </Col>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Space between title and buttons
  
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    flex: 1, // Allow title to take up available space
    textAlign: "center", // Center the title
    right:20
  },
  button: {
    borderRadius: 150,
  },
});
