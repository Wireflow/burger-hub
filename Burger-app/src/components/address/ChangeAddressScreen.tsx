import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useGetAddressByUserId } from "@/src/queries/users/useGetAddressbyUserId";
import { useSessionStore } from "@/src/store/useSessionStore";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addressChane } from "@/src/mutations/user/changeAddress";
import { useCustomToast } from "@/src/hooks/useCustomToast";
import Button from "../ui/Button";
import Header from "../ui/Header";
import { SafeAreaView } from "react-native";
import { formatAddress } from "@/src/util/addressFormat";
import ShowDialog from "../ui/showDialog";

const AddressChangeScreen = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleCancel = () => {
    setDialogOpen(false);
  };
  const { session } = useSessionStore();
  const userId = session?.id;
  const {
    data: address,
    error,
    refetch,
    isLoading,
  } = useGetAddressByUserId(userId as string);

  const showToast = useCustomToast();
  refetch();
  const handleSelectAddress = (selectedAddressId: number) => {
    addressChane(selectedAddressId)
      .then(() => {
        showToast("update address successfully", { type: "success" });
        setDialogOpen(false);
      })
      .catch((error) => {
        showToast("Error updating address", { type: "error" });
      });
  };

  if (isLoading) {
    return (
      <ActivityIndicator
      size={"large"}
        color={"blue"}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
      </ActivityIndicator>
    );
  }
  if (!address || address.length == 0) {
    return (
      <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        no addresses
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error && <Text>Error: {error.message}</Text>}
      <FlatList
        data={address}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              handleSelectAddress(item.id);
              setDialogOpen(true);
            }}
          >
            <View style={styles.addressItem}>
              <View
                style={{
                  width: 56,
                  height: 56,
                  top: 2,
                  borderRadius: 12,
                  backgroundColor: "#FFE3E3",
                }}
              >
                <MaterialCommunityIcons
                  name="map-marker"
                  size={30}
                  color="#DF2C2C"
                  style={{ width: 37, height: 37, top: 12, left: 10 }}
                />
              </View>
              <View style={styles.addressDetails}>
                <Text>{formatAddress({ ...item })}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <ShowDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        onConfirm={() => handleSelectAddress}
        onCancel={handleCancel}
        title="Confirm Selection"
        description="Are you sure you want to select this address?"
        trigger={undefined}
      />
    </SafeAreaView>
  );
};
export default AddressChangeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    opacity: 0.5,
  },
  selectButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
