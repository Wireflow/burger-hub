import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
<<<<<<< HEAD:Burger-app/app/(drawer)/main.tsx
import { MyBottomTabs } from '../tabs/BottomTabs';
import PaymentScreen from './Payment';
import OrderHistoryScreen from '@/src/components/oder-history/OrderHistoryScreen';

=======
 import { MyBottomTabs } from '../tabs/BottomTabs';
 import OrderHistoryScreen from '@/src/components/oder-history/OrderHistoryScreen';
import FavoriteScreen from './FavoriteScreen';
import PaymentScreen from '@/src/components/order/payment/PaymentScreen';
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:app/(drawer)/main.tsx
import Profile from '@/src/components/profile/Profile';
import ProfileScreen from './ProfileScreen';
import OderHistory from './orderhistory/OderHistory';
import FavoriteScreen from './FavoriteScreen';
 

const Drawer = createDrawerNavigator();

const Main = () => {

  return (
    <NavigationContainer independent={true} >
      <Drawer.Navigator  screenOptions={{drawerStyle:{width:1000}}}
    
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName ="home"
      >
<<<<<<< HEAD:Burger-app/app/(drawer)/main.tsx
        <Drawer.Screen name="home" component={MyBottomTabs} options={{headerShown:false}}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="payments" component={PaymentScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="orders" component={OderHistory} options={{headerShown:false}}/>
        <Drawer.Screen name="favorites" component={FavoriteScreen} options={{headerShown:false}}/>
=======
        <Drawer.Screen name="home" component={MyBottomTabs} />
        <Drawer.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
        <Drawer.Screen name="payments" component={PaymentScreen} />
        <Drawer.Screen name="orders" component={OrderHistoryScreen} />
        <Drawer.Screen name="favorites" component={FavoriteScreen} />
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:app/(drawer)/main.tsx
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;