import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import HomeStack from "./homeStack";
import React from 'react';

const Stack = createDrawerNavigator();

const RootDrawNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ gestureEnabled: true }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeStack}
                    options={{ title: 'Home1' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default RootDrawNavigator 