import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import { MyBottomTabs } from '../tabs/BottomTabs';


import ProfileScreen from './ProfileScreen';

import FavoriteScreen from '../Favorite';
import PaymentScreen from '@/src/components/order/payment/PaymentScreen';
<<<<<<< HEAD
import OderHistory from './Order History';
 
=======
import Profile from '@/src/components/profile/Profile';
import UserPaymentScreen from '@/src/components/order/payment/add/userPaymentScreen'
>>>>>>> c9d4b3e758d8902b3721c2b9fb7e2e5423bdff10

const Drawer = createDrawerNavigator();

const Main = () => {

  return (
    <NavigationContainer independent={true} >
      <Drawer.Navigator  screenOptions={{drawerStyle:{width:1000}}}
    
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName ="home"
      >
<<<<<<< HEAD
        <Drawer.Screen name="home" component={MyBottomTabs} options={{headerShown:false}}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="payments" component={PaymentScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="orders" component={OderHistory} options={{headerShown:false}}/>
        <Drawer.Screen name="favorites" component={FavoriteScreen} options={{headerShown:false}}/>
=======
        <Drawer.Screen name="home" component={MyBottomTabs} />
        <Drawer.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
        <Drawer.Screen name="payments" component={PaymentScreen} />
        <Drawer.Screen name="PaymentUser" component={UserPaymentScreen} />
        <Drawer.Screen name="orders" component={OrderHistoryScreen} />
        <Drawer.Screen name="favorites" component={FavoriteScreen} />
>>>>>>> c9d4b3e758d8902b3721c2b9fb7e2e5423bdff10
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;