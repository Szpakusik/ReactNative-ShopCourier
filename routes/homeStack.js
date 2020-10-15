import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Header from '../shared/header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions:({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Login"/>,
            }
        }
    },
}
const HomeStack = createStackNavigator(screens)

export default HomeStack