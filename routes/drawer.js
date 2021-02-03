import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import Logged from "../screens/logged";
import React from 'react';

const Stack = createDrawerNavigator();

const RootDrawNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Logged"
            screenOptions={{ gestureEnabled: true }}
            >
                <Stack.Screen
                name="Logged"
                component={Logged}
                options={{ title: 'Home' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default RootDrawNavigator 