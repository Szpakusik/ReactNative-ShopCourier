import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import Logged from "../screens/logged";
import React from 'react';

const Stack = createDrawerNavigator();

const LoggedOutDrawNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Logged"
                    component={Logged}
                    options={{headerShown: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default LoggedOutDrawNavigator 