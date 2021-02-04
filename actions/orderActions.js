import axios from "axios"
import * as SecureStore from 'expo-secure-store';
import { serverUrl } from '../assets/urls'

const getToken = () => {
    return SecureStore.getItemAsync('secure_token');
};

export const getOrdersAction = ( ) => {
    return ( dispatch ) => {

        getToken().then( ( token ) => {

            axios.get( serverUrl + '/order/history', {
                headers: { 
                    'Authorization': `JWT ${token}`,
                },
                params:{
                    "limit": "10",
                }
            })
            .then(function (response) {
                dispatch( { 
                    type: "GET_ORDERS",
                    payload: {
                        orders: response.data.orders,
                    }
                } )
                console.log(response.data.orders)
            })
            .catch(function (error) {
                console.log(error);
            });
        })
        
    }
}
