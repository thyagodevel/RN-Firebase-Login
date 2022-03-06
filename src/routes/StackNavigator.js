import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Registry from '../pages/Registry';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Registry' component={Registry} />
            <Stack.Screen name='Home' component={DrawerNavigator} />
        </Stack.Navigator>
    )
}

export default StackNavigator;