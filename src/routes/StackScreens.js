import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Registry from '../pages/Registry';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Registry' component={Registry} />
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default StackScreens;