import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomTabBar } from "./CustomTab";
import FavoriteScreen from "../Favorite";
import Profile from "@/src/components/profile/Profile";
import OrderHistoryScreen from "@/src/components/oder-history/OrderHistoryScreen";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Favorites from "@/src/components/Favorite/Favorite";
import Homes from "@/src/components/home/Home";
import CartIcon from "@/src/components/ui/CartIcon";
import { useCartStore } from "@/src/store/cart/cartStore";
import BarUi from "@/src/components/ui/BarUi";
import { Text } from "react-native-paper";
import BarUI from "@/src/components/ui/BarUi";

const Tab = createBottomTabNavigator();
export const MyBottomTabs: React.FC = () => {
  const { cart } = useCartStore(state => state);

  return (
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
