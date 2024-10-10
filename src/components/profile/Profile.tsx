import { useGetUpdatedAddresses } from "@/src/queries/users/getChangedAddress";
import { useSessionStore } from "@/src/store/useSessionStore";
import { formatAddress } from "@/src/util/addressFormat";
import { router, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
  import {
  addresses,
  addresses as AddressType,
} from "@/src/types/schema/address";
import { useAddressStore } from "@/src/store/address/useaddressStore";
import { formatPhoneNumber } from "@/src/util/formatPhoneNumber";

const Profile: React.FC = () => {
   const storedAddresses = useAddressStore((state) => state.addresses);
  const [list, setList] = useState<addresses[]>([]);

  const { refetch } = useGetUpdatedAddresses();
  refetch();
  useEffect(() => {
    setList(storedAddresses || []);
  }, [storedAddresses]);
  const { session } = useSessionStore();

  return (
    <View style={styles.container}>
      <View style={styles.profileDetails}>
        <View style={styles.header}>
          <Text style={styles.profileLabel}>Personal Details</Text>
          <TouchableOpacity
            onPress={() => router.push("/(drawer)/change-Address")}
          >
            <Text style={styles.profileChange}>change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("@/assets/icons/person.png")}
            style={styles.profileImage}
          />
          <View>
            <Text
              style={[styles.profileValue, { fontWeight: "600", fontSize: 18 }]}
            >
              {session?.name}
            </Text>
            <View style={styles.infoContainer}>
              <Text style={[styles.profileValue, { opacity: 0.5 }]}>
                {session?.email}
              </Text>
              <Text style={[styles.profileValue, { opacity: 0.5 }]}>
                {formatPhoneNumber(session?.phone)}
              </Text>
              {list?.map((address) => (
                <View key={address.id}>
                  <Text style={styles.addressText}>
                    {formatAddress({ ...address })}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.sectionContainer}             onPress={() => router.push("/(drawer)/Order History")}
 >
          <Text style={styles.sectionTitle}>Orders</Text>
          <Text style={styles.sectionArrow}>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <Text style={styles.sectionArrow}>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}            onPress={() => router.push("/(drawer)/FavoriteScreen")}
 >Favorites</Text>
          <Text style={styles.sectionArrow}>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(drawer)/address")}
          style={styles.sectionContainer}
        >
          <Text style={styles.sectionTitle}>Addresses</Text>
          <Text style={styles.sectionArrow}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "96%",
    height: 150,
    padding: 5,
    gap: 5,
    borderRadius: 20,
    marginTop: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  profileDetails: {
    flexDirection: "column",
    marginTop: 20,
  },
  profileLabel: {
    fontSize: 18,
    fontWeight: "600",
  },
  profileChange: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#AF042C",
  },
  profileValue: {
    fontSize: 14,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  addressText: {
    width: 200,
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.5,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontWeight: "400",
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "white",
    width: "90%",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionArrow: {
    fontSize: 23,
  },
});

export default Profile;