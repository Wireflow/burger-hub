// import { useGetUpdatedAddresses } from "@/src/queries/users/getChangedAddress";
// import { useSessionStore } from "@/src/store/useSessionStore";
// import { formatAddress } from "@/src/util/addressFormat";
// import { formatPhoneNumber } from "@/src/util/formatPhoneNumber";
// import { router } from "expo-router";
// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
//   const { session } = useSessionStore();
//   const { data: address, error } = useGetUpdatedAddresses(session?.id as string);
//   console.log("ADDD",address)

//   return (
//     <View style={styles.container}>
//       <View style={styles.profileDetails}>
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           <Text style={styles.profileLabel}>Personal Details</Text>
//           <TouchableOpacity onPress={()=>router.navigate("/(drawer)/change-Address")}>
//             <Text style={styles.profileChange}>change</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.profileContainer}>
//           <Image
//             source={require("@/assets/icons/person.png")}
//             style={styles.profileImage}
//           />

//           <View >
//             <Text
//               style={[styles.profileValue, { fontWeight: "600", fontSize: 18 }]}
//             >
//               {session?.name}
//             </Text>
//           <View style={{display:"flex",flexDirection:'column',gap:15}}>
//           <Text style={[styles.profileValue,{opacity:0.5}]}>{session?.email}</Text>
//             <Text style={[styles.profileValue,{opacity:0.5}]}>{formatPhoneNumber(session?.phone)}</Text>
//             {address
//               ?.map((address) => (
//                 <View key={address.id}>
//                  <Text style={{width:200,fontSize:15,fontWeight:"400",opacity:0.5}}>{formatAddress({...address})}</Text>
//                 </View>
//               ))
//            }
//           </View>
//           </View>
//         </View>
//       </View>
//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>Orders</Text>
//           <Text style={styles.sectionArrow}> {">"}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>Payment Methods</Text>
//           <Text style={styles.sectionArrow}>{">"}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>Favorites</Text>
//           <Text style={styles.sectionArrow}>{">"}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.sectionContainer}
//           onPress={() => router.push("/(drawer)/address")}
//         >
//           <Text style={styles.sectionTitle}>Addresses</Text>
//           <Text style={styles.sectionArrow}>{">"}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   profileContainer: {
//     display: "flex",
//     flexDirection: "row",
//     backgroundColor: "white",
//     width: "96%",
//     height:150,
//     padding: 5,
//     gap: 5,
//     borderRadius: 20,
//     marginTop: 5,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 20,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
//   profileDetails: {
//     display:"flex",
//     flexDirection:"column",
//     marginTop: 20,
//   },
//   profileLabel: {
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   profileChange: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#AF042C",
//   },
//   profileValue: {
//     fontSize: 14,
//   },
//   buttonsContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: 14,
//     fontWeight: "400",
//   },
//   sectionContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 20,
//     backgroundColor: "white",
//     width: "90%",
//     alignContent: "center",
//     textAlign: "center",
//     height: 50,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   sectionArrow: {
//     fontSize: 23,
//   },
// });

// export default ProfileScreen;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '@/src/components/profile/Profile'

const ProfileScreen = () => {
  return (
    <>
      <Profile/>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
