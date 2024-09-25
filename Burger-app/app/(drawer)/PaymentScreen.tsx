import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const user = {
    name: 'Nader Abdulrub',
    email: 'Dosamarvis@gmail.com',
    phoneNumber: '+1 (917) 714-1052',
    address: '123 Street Ave, Bronx, New York, 10466, United States',
    avatar: 'https://example.com/your_avatar.jpg', // Replace with your avatar image URL
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.avatar }} style={styles.profileImage} />
        <Text style={styles.profileName}>{user.name}</Text>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.profileLabel}>Personal Details</Text>
        <Text style={styles.profileValue}>{user.email}</Text>
        <Text style={styles.profileValue}>{user.phoneNumber}</Text>
        <Text style={styles.profileValue}>{user.address}</Text>
      </View>
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
      <TouchableOpacity style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Addresses</Text>
        <Text style={styles.sectionArrow}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileDetails: {
    marginTop: 20,
  },
  profileLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileValue: {
    fontSize: 14,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionArrow: {
    fontSize: 16,
  },
});

export default ProfileScreen;