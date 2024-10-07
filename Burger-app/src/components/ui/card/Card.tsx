import React from "react";
import { View, StyleSheet } from "react-native";

type CardProps = {
  height: number;
  width: number;
  children: React.ReactNode;
};

const Card = ({ height, width, children }: CardProps) => {
  return <View style={[styles.card, { height, width }]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",

    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 16,
    top: 10,
    left: 15,
  },
});
