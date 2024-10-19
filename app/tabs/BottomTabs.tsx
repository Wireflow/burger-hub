import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomTabBar } from "./CustomTab";
<<<<<<< HEAD:Burger-app/app/tabs/BottomTabs.tsx
import FavoriteScreen from "../(drawer)/FavoriteScreen";
import Homes from "@/src/components/home/home";
import Profile from "@/src/components/profile/Profile";
import OrderHistoryScreen from "@/src/components/oder-history/OrderHistoryScreen";
import { View, StyleSheet } from "react-native";
import Favorites from "@/src/components/Favorite/Favorite";
=======
 import FavoriteScreen from "../(drawer)/FavoriteScreen";
import Homes from "@/src/components/home/Home";
import Profile from "@/src/components/profile/Profile";
import OderHistory from "../(drawer)/Order History";
 
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:app/tabs/BottomTabs.tsx

const Tab = createBottomTabNavigator();
export const MyBottomTabs: React.FC = () => {
  return (
<<<<<<< HEAD:Burger-app/app/tabs/BottomTabs.tsx
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="home"
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen
          name="home"
          component={Homes}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="favorite"
          component={Favorites}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="heart-outline"
                color={color}
                size={size}
              />
            ),
            title: "Favorites",
            headerTitleStyle: styles.headerStyle,
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            ),
            title: "Profile",
            headerTitleStyle: styles.headerStyle,
          }}
        />
        <Tab.Screen
          name="order history"
          component={OrderHistoryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="history"
                color={color}
                size={size}
              />
            ),
            title: "Order History",
            headerTitleStyle: styles.headerStyle,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
  },
  headerStyle: {
    width: 200,
    height: 45,
    top: 5,
    left: 10,
    fontSize: 30,
    fontWeight: "400",
    lineHeight: 44,
  },
});
=======
    <Tab.Navigator
      initialRouteName="home"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="home"
        component={Homes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="order"
        component={OderHistory}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:app/tabs/BottomTabs.tsx
