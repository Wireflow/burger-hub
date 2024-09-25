import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { router, Stack } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon
 import Modal from "react-native-modal";
 
const OrderCustomer = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
    // You can add any additional logic here (e.g., navigating back)
    // router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle:{ backgroundColor:'#F6F6F9'},
          headerLeft: () => (
            <HeaderBackButton label="Cancel" onPress={() => router.back()} />
          ),
          title: "",
         
        }}
      />
 
 <View>
      <Modal isVisible={isPressed}
      animationInTiming={1000}
      avoidKeyboard={true}
      onBackButtonPress={handlePress}
      onBackdropPress={handlePress}
        >
        <View style={{ flex: 1,backgroundColor:'#F6F6F9' }}>
          <Text>I am the modal content!</Text>
          <Button title="Show modal" onPress={handlePress} />

        </View>
      </Modal>
    </View>
 
 
     </>
  );
};

const styles = StyleSheet.create({
 
  buttonDefault: {
    backgroundColor: 'white',
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'black', // Default text color
    marginLeft: 5, // Space between icon and text
  },
});

export default OrderCustomer;