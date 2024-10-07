// import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { StatusBar } from "expo-status-bar"; 
// import React, { useState } from "react";
// import Button from "@/src/components/ui/Button";
// import Formaddress from "@/src/components/address/Formaddress";
// import AddressScreen from "./AddressScreen";
// import FormAddress from "@/src/components/address/Formaddress";
// const OpenModalAddress=()=> {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModalVisibility = () => {
//     setModalVisible(!isModalVisible);
//   };
//   return (
//    <SafeAreaView>
//     <StatusBar style="auto" networkActivityIndicatorVisible animated backgroundColor="#091e3a" />
//     <View>
//       <Button
//         color="red"
//         size="large"
//         title="Add Address"
//         onClick={toggleModalVisibility}
//       />
//       <FormAddress open={isModalVisible} setOpen={toggleModalVisibility} />
//     </View>

//    </SafeAreaView>
//   );
// }
// export default OpenModalAddress;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });