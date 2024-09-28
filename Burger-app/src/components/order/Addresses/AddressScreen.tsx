import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useGetAddressByUserId } from "@/src/queries/users/useGetAddressbyUserId";
import { useSessionStore } from "@/src/store/useSessionStore";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NoAddress from "../../address/NoAddress";
import OpenModalAddress from "../../address/OpenModalAddress";
import Button from "../../ui/Button";
import Buttonout from "../../ui/Buttonout";
import { router } from "expo-router";
import Header from "./Header";
 



export default function AddressScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  const { session } = useSessionStore();
  const { data: address, error } = useGetAddressByUserId(session?.id as string);
  const [addresses, setAddresses] = React.useState(address || []);

  React.useEffect(() => {
    if (address) {
      setAddresses(address);
    }
  }, [address]);

  const handleDeleteAddress = (index: number) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((_, i) => i !== index)
    );
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
    
     <Header/>
      {!address && <NoAddress/> }
      <FlatList
        data={addresses}
        renderItem={({ item, index }) => (
            <View style={styles.addressItem}>
            <View  style={styles.icon}>
             <Image
             source={require('@/assets/icons/Location.png')}
             />
            </View>
        <View style={styles.addressDetails}>
        <Text>{item.street}</Text>
  <Text>{`${item.city}, ${item.state}, ${item.zip_code}`}</Text>
  <Text>{item.country}</Text>
        </View>
        </View> 

         )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity>
        <Button title="New Address" size="large" color="white" onClick={()=>router.navigate('/(drawer)/address')}/>
      </TouchableOpacity>

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
    icon:{
    height:50,
    width:50,
    backgroundColor:'#FFE3E3',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    margin:5

}
});
