import React from 'react';
import * as OrderActions from '../actions/orderActions'
import { connect } from 'react-redux';
import OrderComponent from '../components/orderComponent';

const OrderContainer = function( { order } ) {
    return(
        <OrderComponent
            order={order}
        />
    )
} 

export default connect( null, OrderActions )( OrderContainer );
