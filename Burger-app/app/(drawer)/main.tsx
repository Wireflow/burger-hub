import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import ProfileScreen from './ProfileScreen';
import { MyBottomTabs } from '../tabs/BottomTabs';
import PaymentScreen from './PaymentScreen';
import OrderHistoryScreen from '@/src/components/oder-history/OrderHistoryScreen';
import FavoriteScreen from './FavoriteScreen';
import Profile from '@/src/components/profile/Profile';
 

const Drawer = createDrawerNavigator();

const Main: React.FC = () => {

  return (
    <NavigationContainer independent={true} >
      <Drawer.Navigator   screenOptions={{drawerStyle:{width:1000}}}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="home" component={MyBottomTabs}/>
        <Drawer.Screen name="Profile" component={Profile}/>
        <Drawer.Screen name="payments" component={PaymentScreen} />
        <Drawer.Screen name="orders" component={OrderHistoryScreen} />
        <Drawer.Screen name="favorites" component={FavoriteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;