// Example to Use React Native Vector Icons
// https://aboutreact.com/react-native-vector-icons/

// Import React
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/Auth/Login';
import Blog from './src/Screens/blogs/Blog';
import { BlogDetail } from './src/Screens/blogs/BlogDetail';

// Import required component
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen
          name='Blog'
          component={Blog}
          options={{ headerShown: false }} />
        <Stack.Screen
          name='BlogDetail'
          component={BlogDetail}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;