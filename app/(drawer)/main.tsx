import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import { MyBottomTabs } from '../tabs/BottomTabs';
import ProfileScreen from './ProfileScreen';
import FavoriteScreen from '../Favorite';
import PaymentScreen from '@/src/components/order/payment/PaymentScreen';
import OrderHistory from './Order History';
  import BarUI from '@/src/components/ui/BarUi';
import { Button } from 'react-native-paper';
import PaymentUser from './order/PaymentUser';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: { width: 1000 },
          headerTitle: 'eeee',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="home"
      >
        <Drawer.Screen
          name="home"
          component={MyBottomTabs}
          options={({ navigation }) => ({
            headerShown: false,
  
          })}
        />

        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="payments" component={PaymentUser} options={{ headerShown: false }} />
        <Drawer.Screen name="orders" component={OrderHistory} options={{ headerShown: false }} />
        <Drawer.Screen name="favorites" component={FavoriteScreen} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;