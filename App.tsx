/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
// Example to Use React Native Vector Icons
// https://aboutreact.com/react-native-vector-icons/

// Import React

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './src/Auth/Login';
import DrawerNavigation from './src/Navigation/DrawerNavigation';
import Blog from './src/Screens/blogs/Blog';
import { BlogDetail } from './src/Screens/blogs/BlogDetail';

// Import required component
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Blog"
          component={Blog}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Drawer' component={DrawerNavigation}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;