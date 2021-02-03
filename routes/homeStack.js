import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Header from '../shared/header'

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: () => <Header navigation={navigation} title="Login"/> }}
        />
    </Stack.Navigator>
  );
}

export default HomeStack