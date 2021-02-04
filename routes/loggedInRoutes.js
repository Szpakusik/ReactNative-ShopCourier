import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import Logged from "../screens/logged";
import React from 'react';
import OrdersScreen from '../screens/orders';

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
                <Stack.Screen
                    name="Orders"
                    component={OrdersScreen}
                    options={{headerShown: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default LoggedOutDrawNavigator 