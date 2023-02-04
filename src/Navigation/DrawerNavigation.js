import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Logout from '../Auth/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Đăng xuất"
        component={Logout}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
