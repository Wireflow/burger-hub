import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useGetAddressByUserId } from "@/src/queries/users/useGetAddressbyUserId";
import { useSessionStore } from "@/src/store/useSessionStore";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../ui/Button";
import Formaddress from "./Formaddress";
import { router } from "expo-router";
import OpenModalAddress from "./OpenModalAddress";

export default function AddressScreen() {
  
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModalVisibility = () => {
      setModalVisible(!isModalVisible);
    };
   
  const { session } = useSessionStore();
  const { data: address, error } = useGetAddressByUserId(session?.id as string);
  const [addresses, setAddresses] = React.useState(address || []);

  // Update address state when fetched
  React.useEffect(() => {
    if (address) {
      setAddresses(address);
    }
  }, [address]);

  const handleDeleteAddress = (index: number) => {
    setAddresses((prevAddresses) => prevAddresses.filter((_, i) => i !== index));
  };

  const renderRightActions = (index: number) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => handleDeleteAddress(index)}
    >
      <MaterialCommunityIcons name="delete" size={24} color="white" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
     
      <FlatList
        data={addresses}
        renderItem={({ item, index }) => (
          <Swipeable renderRightActions={() => renderRightActions(index)}>
            <View style={styles.addressItem}>
              <MaterialCommunityIcons name="map-marker" size={24} color="red" />
              <View style={styles.addressDetails}>
                <Text>{item.street}</Text>
                <Text>{`${item.city}, ${item.state}, ${item.zip_code}`}</Text>
                <Text>{item.country}</Text>
              </View>
            </View>
          </Swipeable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
   
    <Button
  color="red"
  size="large"
  title="Add Address"
  onClick={toggleModalVisibility}
/>
{isModalVisible&&<Formaddress open={isModalVisible} setOpen={toggleModalVisibility}/>} 

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 1,
  },
  addressDetails: {
    marginLeft: 8,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: "50%",
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },
});
