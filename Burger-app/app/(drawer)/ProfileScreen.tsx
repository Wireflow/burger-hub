import { useGetAddressByUserId } from "@/src/queries/users/useGetAddressbyUserId";
import { useSessionStore } from "@/src/store/useSessionStore";
import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { session } = useSessionStore();
  const { data: address, error } = useGetAddressByUserId(session?.id as string);

  return (
    <View style={styles.container}>
      <View style={styles.profileDetails}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.profileLabel}>Personal Details</Text>
          <TouchableOpacity>
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
            <Text style={styles.profileValue}>{session?.email}</Text>
            <Text style={styles.profileValue}>{session?.phone}</Text>
            {address
              ?.map((address) => (
                <View key={address.id}>
                  <Text>{address.street}</Text>
                  <Text>{`${address.city}, ${address.state}, ${address.zip_code}`}</Text>

                  <Text style={styles.profileValue}>{address.country}</Text>
                </View>
              ))
              .slice(1, 2)}
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Orders</Text>
          <Text style={styles.sectionArrow}> {">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <Text style={styles.sectionArrow}>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Favorites</Text>
          <Text style={styles.sectionArrow}>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionContainer}
          onPress={() => router.push("/(drawer)/address")}
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
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "95%",
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
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profileDetails: {
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
    alignContent: "center",
    textAlign: "center",
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

export default ProfileScreen;
