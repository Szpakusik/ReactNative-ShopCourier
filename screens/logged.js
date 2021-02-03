import React from 'react'
import * as yup from 'yup'
import * as LoginActions from '../actions/loginActions'
import { connect } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/button'

function Logged( { loginAction } ) {

    const handleLogout = () => {
        loginAction( false )
    }

    return(
        <View style={globalStyles.container}>
            <Text>You are logged!</Text>
            <FlatButton text="Wyloguj" onPress={handleLogout}/>
        </View>
    )
}

export default connect(null, LoginActions)(Logged);

const styles = StyleSheet.create({

})
