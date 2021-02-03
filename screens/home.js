import React, {useState} from 'react'
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'
import {Formik} from 'formik'
import * as yup from 'yup'
import { TextInput } from 'react-native-gesture-handler'
import FlatButton from '../shared/button'
import Login from './login'
import Navigator from '../routes/drawer'


const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('isnum1-5', 'Rating must be a number 1-5', (val)=>{
        return Number(val) > 0 && Number(val) < 6
    })
})



function Home( { navigation, isLogged } ) {

    const handleLogin = ( bLogin ) => {
        setIsLogged( true )
    }

    if ( isLogged ) {
        return(
            <Navigator />
        )
    } else {
        return(
            <Login handleLogin={handleLogin}/>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        isLogged: state.loginReducer.isLogged,
    }
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({

})
