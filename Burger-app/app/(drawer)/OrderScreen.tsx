import { useSessionStore } from '@/src/store/useSessionStore';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
 const {session}=useSessionStore()

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        {/* <Image source={{ uri: user.avatar }} style={styles.profileImage} /> */}
       
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.profileLabel}>Personal Details</Text>
        <Text style={styles.profileValue}>{session?.name}</Text>
        <Text style={styles.profileValue}>{session?.email}</Text>
        <Text style={styles.profileValue}>{session?.phone}</Text>
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
      <TouchableOpacity style={styles.sectionContainer}>
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
  buttonsContainer:{
    justifyContent:"center",
    alignItems:"center"
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor:"white",
    width:"90%",
    alignContent:"center",
    textAlign:"center",
    height:50,
    paddingHorizontal:20,
    borderRadius:20
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