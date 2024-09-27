import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { CustomTabBar } from "./CustomTab";
import HomeScreen from "../home/HomeScreen";
import ProfileScreen from "../(drawer)/ProfileScreen";
import PaymentScreen from "../(drawer)/PaymentScreen";
import OrderScreen from "../(drawer)/OrderScreen";
import OderHistory from "../(drawer)/orderhistory/OderHistory";
import FavoriteScreen from "../(drawer)/FavoriteScreen";
import Homes from "@/src/components/Home/Homes";


const Tab = createBottomTabNavigator();

export const MyBottomTabs: React.FC = () => {
  return (
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
        component={ProfileScreen}
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
