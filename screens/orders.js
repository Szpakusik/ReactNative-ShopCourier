import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global';
import OrderListContainer from '../containers/orderListContainer';

function OrdersScreen() {
    return(
        <View style={globalStyles.container}>
            <Text>Order Screen</Text>
            <OrderListContainer />
        </View>
    )
}

export default OrdersScreen;