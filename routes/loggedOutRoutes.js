import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import Login from "../screens/login";
import React from 'react';

const Stack = createStackNavigator();

const LoggedInDrawNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default LoggedInDrawNavigator 