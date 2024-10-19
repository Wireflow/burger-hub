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
<<<<<<< HEAD:Burger-app/src/components/ui/card/Card.tsx
    backgroundColor: "#f9f9f9",
=======
    backgroundColor: "white",
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:src/components/ui/card/Card.tsx

    padding: 16,

    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,

    margin: 15,
  },
});