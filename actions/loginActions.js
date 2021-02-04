import axios from "axios"
import * as SecureStore from 'expo-secure-store';
import { serverUrl } from '../assets/urls'

const setToken = (token) => {
    return SecureStore.setItemAsync('secure_token', token);
};
const deleteToken = () => {
    return SecureStore.deleteItemAsync('secure_token');
};

export const loginAction = ( isLogged, values ) => {
    return ( dispatch ) => {

        if( !isLogged ){
            dispatch( { type: "LOG_IN", payload: { isLogged: isLogged } } )
            deleteToken();
        } 
        else{
            axios.post( serverUrl + '/account/login', {
                username: values.login,
                password: values.password,
            })
            .then(function (res) {
                dispatch( { type: "LOG_IN", payload: { isLogged: isLogged } } )
                setToken( res.data.token );
            })
            .catch(function (error) {
                console.log(error);
                // setMessage( 'Błąd logowania, spróbuj ponownie' );
            });
        }
        
    }
}