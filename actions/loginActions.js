import axios from "axios"
import * as SecureStore from 'expo-secure-store';
import { serverUrl } from '../assets/urls'

const setToken = (token) => {
    return SecureStore.setItemAsync('secure_token', token);
};

export const loginAction = ( isLogged, email, password ) => {
    return ( dispatch ) => {

        axios.post( serverUrl + '/account/login', {
            username: "qwe",
            password: "qwe",
        })
        .then(function (res) {
            
            dispatch( { type: "LOG_IN", payload: { isLogged: false } } )
            setToken( res.data.token );

        })
        .catch(function (error) {

            console.log(error);
            // setMessage( 'Błąd logowania, spróbuj ponownie' );
        });

    }
}