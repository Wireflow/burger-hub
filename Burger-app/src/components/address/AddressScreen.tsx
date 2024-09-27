import React, { useState } from "react";
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
import { Dialog } from "react-native-paper";
import { addressDelete } from "@/src/mutations/user/addressDelete";

export default function AddressScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  const { session } = useSessionStore();
  const userId = session?.id;
  const {
    data: address,
    error,
    refetch,
  } = useGetAddressByUserId(session?.id as string);
  const [addresses, setAddresses] = React.useState(address || []);

  React.useEffect(() => {
    if (address) {
      setAddresses(address);
    }
  }, [address]);

  // const handleDeleteAddress = (index: number) => {
  //   setAddresses((prevAddresses) =>
  //     prevAddresses.filter((_, i) => i !== index)
  //   );
  // };

  const renderRightActions = (index: number, id: number) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => addressDelete(id, userId as string)}
    >
      <MaterialCommunityIcons name="delete" size={24} color="white" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        renderItem={({ item, index }) => (
          <Swipeable
            renderRightActions={() => renderRightActions(index, item.id)}
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
        keyExtractor={(item, index) => index.toString()}
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
    top: "5%",
    backgroundColor: "#DF2C2C",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: "40%",
    borderRadius: 100,
  },
  addButton: {
    backgroundColor: "#DF2C2C",
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
