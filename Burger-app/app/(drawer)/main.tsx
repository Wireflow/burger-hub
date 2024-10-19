import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import { MyBottomTabs } from '../tabs/BottomTabs';
import PaymentScreen from './Payment';
import OrderHistoryScreen from '@/src/components/oder-history/OrderHistoryScreen';

import Profile from '@/src/components/profile/Profile';
import ProfileScreen from './ProfileScreen';
import OderHistory from './orderhistory/OderHistory';
import FavoriteScreen from './FavoriteScreen';
 

const Drawer = createDrawerNavigator();

const Main: React.FC = () => {

  return (
    <NavigationContainer independent={true} >
      <Drawer.Navigator   screenOptions={{drawerStyle:{width:1000}}}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="home" component={MyBottomTabs} options={{headerShown:false}}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="payments" component={PaymentScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="orders" component={OderHistory} options={{headerShown:false}}/>
        <Drawer.Screen name="favorites" component={FavoriteScreen} options={{headerShown:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;