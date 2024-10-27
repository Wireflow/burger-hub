import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import { MyBottomTabs } from "../tabs/BottomTabs";

import ProfileScreen from "./pofile/Index";

import Disconnected from "../../app/disconnected/index";
import BarUI from "@/src/components/ui/BarUi";
import UserPaymentScreen from "@/src/components/paymentMethod/userPaymentScreen";
import OrderHistoryScreen from "@/src/components/oder-history/OrderHistoryScreen";
import Favorites from "@/src/components/Favorite/Favorite";
import NetInfo from "@react-native-community/netinfo";

const Drawer = createDrawerNavigator();

const Main = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return unsubscribe;
  });
  return (
    <NavigationContainer independent={true}>
      {isConnected ? (
        <>
          <Drawer.Navigator
            screenOptions={{ drawerStyle: { width: 1000 } }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            initialRouteName="home"
          >
            <Drawer.Screen
              name="home"
              component={MyBottomTabs}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="Profile"
              component={ProfileScreen}
              options={({ navigation }) => ({
                headerShown: true,

                headerLeft: () => (
                  <BarUI onClick={() => navigation.toggleDrawer()} />
                ),
                title: "Profile",
                headerTitleAlign: "center",
              })}
            />
            <Drawer.Screen
              name="payments"
              component={UserPaymentScreen}
              options={({ navigation }) => ({
                headerShown: true,

                headerLeft: () => (
                  <BarUI onClick={() => navigation.toggleDrawer()} />
                ),
                title: "Payment Methods",
                headerTitleAlign: "center",
              })}
            />
            <Drawer.Screen
              name="orders"
              component={OrderHistoryScreen}
              options={({ navigation }) => ({
                headerShown: true,

                headerLeft: () => (
                  <BarUI onClick={() => navigation.toggleDrawer()} />
                ),
                title: "orders",
                headerTitleAlign: "center",
              })}
            />
            <Drawer.Screen
              name="favorites"
              component={Favorites}
              options={({ navigation }) => ({
                headerShown: true,

                headerLeft: () => (
                  <BarUI onClick={() => navigation.toggleDrawer()} />
                ),
                title: "favorites",
                headerTitleAlign: "center",
              })}
            />
          </Drawer.Navigator>
        </>
      ) : (
        <>
          <Drawer.Navigator
            screenOptions={{ drawerStyle: { display: "none" } }}
          >
            <Drawer.Screen
              name="disconnected"
              component={Disconnected}
              options={{ headerShown: false }}
            />
          </Drawer.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default Main;
