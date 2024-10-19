import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Modal,
  Dimensions,
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
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";
type Props = {
  setOpen: any;
  open: boolean;
  refetch: (
    options?: RefetchOptions & RefetchQueryFilters
  ) => Promise<QueryObserverResult<any, any>>;
};
const { width } = Dimensions.get("window");

const AddressChangeScreen = ({ setOpen, open, refetch }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleCancel = () => {
    setDialogOpen(false);
  };
  const [Id, setId] = useState(Number);
  const { session } = useSessionStore();
  const userId = session?.id;
<<<<<<< HEAD:Burger-app/src/components/address/ChangeAddressScreen.tsx
  const { data: address } = useGetAddressByUserId(userId as string);

  const showToast = useCustomToast();
  const handleSelectAddress = () => {
    addressChane(Id)
=======
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
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:src/components/address/ChangeAddressScreen.tsx
      .then(() => {
        showToast("update address successfully", { type: "success" });
        refetch();
        setDialogOpen(false);
      })
      .catch((error) => {
        showToast("Error updating address", { type: "danger" });
      });
  };

<<<<<<< HEAD:Burger-app/src/components/address/ChangeAddressScreen.tsx
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        onDismiss={setOpen}
        presentationStyle="overFullScreen"
        transparent
        visible={open}
        animationType="slide"
      >
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <FlatList
              data={address}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setId(item.id);
                    setDialogOpen(true);
                  }}
                  style={{ marginBottom: 9 }}
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
                      {address ? (
                        <Text>{formatAddress({ ...item })}</Text>
                      ) : (
                        <Text>no address</Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <View style={{ position: "absolute", bottom: 5 }}>
              <Button
                color="red"
                size="small"
                title="Close"
                onClick={() => setOpen(false)}
              />
            </View>
          </View>
        </View>
        <ShowDialog
          open={dialogOpen}
          setOpen={setDialogOpen}
          onConfirm={handleSelectAddress}
          onCancel={handleCancel}
          title="Confirm Selection"
          description="Are you sure you want to select this address?"
          trigger={undefined}
        />
      </Modal>
=======
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
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:src/components/address/ChangeAddressScreen.tsx
    </SafeAreaView>
  );
};
export default AddressChangeScreen;
const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalView: {
    position: "absolute",
    display: "flex",
    top: "25%",
    left: "50%",
    height: "auto",
    width: width * 0.8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
    backgroundColor: "#F5F5F5",
    borderRadius: 7,
    padding: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5,
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