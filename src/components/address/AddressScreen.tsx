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
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../ui/Button";
import Formaddress from "./Formaddress";
import { addressDelete } from "@/src/mutations/user/addressDelete";
import { formatAddress } from "@/src/util/addressFormat";
import Header from "../ui/Header";
 import { useCustomToast } from "@/src/hooks/useCustomToast";
import ShowDialog from "../ui/showDialog";

const AddressScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSwipeable, setActiveSwipeable] = useState<number | null>(null);
  const showToast = useCustomToast();
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };
  const { session } = useSessionStore();
  const userId = session?.id;
  const {
    data: address,
    error,
    isLoading,
    refetch,isFetched,isFetchedAfterMount,isFetching
  } = useGetAddressByUserId(userId as string);
  const [addresses, setAddresses] = useState(address || []);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleCancel = () => {
    setDialogOpen(false);
  };
  useEffect(() => {
    if (address) {
      setAddresses(address);
    }
   }, [address]);


   

  const handleDeleteAddress = (id: number) => {
   

    addressDelete(id, userId as string)
      .then(() => {
        refetch();

        showToast("delete address successfully", { type: "success" });
        setDialogOpen(false)
      })
      .catch(() => {
        showToast("faild to delete address", { type: "error" });
      });
    
  };


  const renderRightActions = (id: number) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => {
        handleDeleteAddress(id);
        setDialogOpen(true);
    
      }}
    >

      <MaterialCommunityIcons name="delete" size={24} color="white" />
    </TouchableOpacity>
  );

  const onSwipeableWillOpen = (index: number) => {
    if (activeSwipeable !== null && activeSwipeable !== index) {
      setActiveSwipeable(null);
    }
    setActiveSwipeable(index);
  };

  const onSwipeableWillClose = () => {
    setActiveSwipeable(null);
  };
  if (isFetching) {
    return (
      <ActivityIndicator
      size={"large"}
        color={"#AF042C"}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
      </ActivityIndicator>
    );
  }

 
  if (!address ) {
    return (
      <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        no addresses
      </Text>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        renderItem={({ item, index }) => (
          <Swipeable
            onSwipeableWillOpen={() => onSwipeableWillOpen(index)}
            onSwipeableWillClose={onSwipeableWillClose}
            renderRightActions={() =>
              renderRightActions(item.id)
              
              } 
            overshootRight={true}
            enabled={activeSwipeable === null || activeSwipeable === index} // Enable swipe only if no other swipeable is open
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
          </Swipeable>
        )}
        keyExtractor={(item) => item.id.toString()}  
      />

      <View style={{ zIndex: 1, position: "absolute", bottom: 25
        ,width:'100%',
         }}>
        <Button
          color="red"
          size="large"
          title="Add Address"
          onClick={toggleModalVisibility}
        />
      </View>
      <Formaddress
        open={isModalVisible}
        setOpen={toggleModalVisibility}
        refetch={refetch}
      />
       <ShowDialog
  open={dialogOpen}
  setOpen={setDialogOpen}
  onConfirm={() => handleDeleteAddress}
  onCancel={handleCancel}
  title="Delete Confirmation"
  description="Are you sure you want to delete this address?"
  trigger={undefined}
/>
    </View>
  );
};
export default AddressScreen;
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
    width: 200,
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.5,
    left: 12,
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