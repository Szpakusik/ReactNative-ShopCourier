import React from 'react';
import * as yup from 'yup'
import * as LoginActions from '../actions/loginActions'
import { connect } from 'react-redux';
import LoginComponent from '../components/loginComponent';

const ReviewSchema = yup.object({
    login: yup.string().required().min(4),
    password: yup.string().required().min(4),
})

const LoginContainer = function( LoginActions ) {
    return(
        <LoginComponent 
            ReviewSchema={ ReviewSchema }
            LoginActions={ LoginActions }/>
    )
}   

export default connect( null, LoginActions )( LoginContainer );
