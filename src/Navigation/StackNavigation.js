import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../Auth/Login';
import Blog from '../Screens/blogs/Blog';
import { BlogDetail } from '../Screens/blogs/BlogDetail';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BlogDetail"
        component={BlogDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
