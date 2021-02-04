import React, {useEffect} from 'react';
import * as OrderActions from '../actions/orderActions'
import { connect } from 'react-redux';
import OrderListComponent from '../components/orderListComponent';

const OrderListContainer = function( { ordersList, getOrdersAction } ) {

    useEffect(() => { 
        getOrdersAction();
    },[]);

    return(
        <OrderListComponent
            ordersList={ordersList}
        />
    )
}   

const mapStateToProps = (state) => {
    return{
        ordersList: state.orderReducer.orders,
    }
}

export default connect( mapStateToProps, OrderActions )( OrderListContainer );