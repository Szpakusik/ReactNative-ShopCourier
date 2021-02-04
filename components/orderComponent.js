import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const OrderComponent = function( { order } ) {
    return(
      <TouchableOpacity onPress={() => null}>
        <Text>{order.date}</Text>
      </TouchableOpacity>
    )
}

export default OrderComponent ;
