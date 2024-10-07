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
<<<<<<< HEAD
    backgroundColor: "#f9f9f9",

=======
    backgroundColor: '#fff',
    padding: 16,
>>>>>>> 9add745c8abe0155461daf7e295f31b499840347
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 16,
<<<<<<< HEAD
    top: 10,
    left: 15,
=======
    margin:15,
   marginTop:40,
   
>>>>>>> 9add745c8abe0155461daf7e295f31b499840347
  },
});
