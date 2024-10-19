import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const NoAddress = () => {
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            gap: 5,
          }}
        >
          <Image
            source={require("@/assets/icons/Location.png")}
            style={{ width: 107, height: 115 }}
          />
          <Text style={{ fontSize: 28, fontWeight: "600", width: 190 }}>
            No orders yet
          </Text>
          <Text>Hit the red button to add begin ordering</Text>
        </View>
      );
}

export default NoAddress

const styles = StyleSheet.create({})