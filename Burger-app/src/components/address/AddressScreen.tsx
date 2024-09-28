import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useGetAddressByUserId } from "@/src/queries/users/useGetAddressbyUserId";
import { useSessionStore } from "@/src/store/useSessionStore";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../ui/Button";
import Formaddress from "./Formaddress";
import { addressDelete } from "@/src/mutations/user/addressDelete";

export default function AddressScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSwipeable, setActiveSwipeable] = useState<number | null>(null);

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  const { session } = useSessionStore();
  const userId = session?.id;
  const {
    data: address,
    error,
    refetch,
  } = useGetAddressByUserId(userId as string);
  const [addresses, setAddresses] = useState(address || []);

  useEffect(() => {
    if (address) {
      setAddresses(address);
    }
  }, [address]);

  const handleDeleteAddress = (id: number) => {
    Alert.alert(
      "Delete Confirmation",
      "Are you sure you want to delete this address?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "default",
          onPress: () => {
            addressDelete(id, userId as string);
            refetch();
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderRightActions = (id: number) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => handleDeleteAddress(id)}
    >
      <MaterialCommunityIcons name="delete" size={24} color="white" />
    </TouchableOpacity>
  );

  const onSwipeableWillOpen = (index: number) => {
    if (activeSwipeable !== null && activeSwipeable !== index) {
      setActiveSwipeable(null); // Close the currently active swipeable
    }
    setActiveSwipeable(index);
  };

  const onSwipeableWillClose = () => {
    setActiveSwipeable(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        renderItem={({ item, index }) => (
          <Swipeable
            onSwipeableWillOpen={() => onSwipeableWillOpen(index)}
            onSwipeableWillClose={onSwipeableWillClose}
            renderRightActions={() => renderRightActions(item.id)}
            overshootRight={true}
            enabled={activeSwipeable === null || activeSwipeable === index} // Enable swipe only if no other swipeable is open
          >
            <View style={styles.addressItem}>
              <MaterialCommunityIcons
                name="map-marker"
                size={30}
                color="#DF2C2C"
              />
              <View style={styles.addressDetails}>
                <Text>{item.street}</Text>
                <Text>{`${item.city}, ${item.state}, ${item.zip_code}`}</Text>
                <Text>{item.country}</Text>
              </View>
            </View>
          </Swipeable>
        )}
        keyExtractor={(item) => item.id.toString()} // Use unique id for keyExtractor
      />

      <Button
        color="red"
        size="large"
        title="Add Address"
        onClick={toggleModalVisibility}
      />
      <Formaddress
        open={isModalVisible}
        setOpen={toggleModalVisibility}
        refetch={refetch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 20,
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
    top: "5%",
    backgroundColor: "#DF2C2C",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: "40%",
    borderRadius: 100,
  },
});
