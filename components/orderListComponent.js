import React from 'react';
import { View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global'
import OrderContainer from '../containers/orderContainer';

const OrderListComponent = function( { ordersList } ) {
    return(
        <View style={globalStyles.container}>
          <FlatList
            data={ordersList}
            keyExtractor={item => item.orderId.toString() }
            renderItem={({ item }) => {
              return <OrderContainer order={ item } />
            }}/> 
        </View>
    )
}

export default OrderListComponent ;