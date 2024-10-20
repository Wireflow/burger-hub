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
    backgroundColor: "white",

    padding: 16,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
<<<<<<< HEAD
    elevation: 3,

    margin: 15,
=======
    elevation: 1,
marginTop:40,
    margin: 20,
>>>>>>> c9d4b3e758d8902b3721c2b9fb7e2e5423bdff10
  },
});