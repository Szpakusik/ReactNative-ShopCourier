import React from 'react'
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native'
import * as yup from 'yup'
import LoggedInNavigator from '../routes/loggedInRoutes'
import LoggedOutNavigator from '../routes/loggedOutRoutes'

function Home( { isLogged } ) {

    if ( isLogged ) {
        return(
            <LoggedInNavigator />
        )
    } else {
        return(
            <LoggedOutNavigator />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isLogged: state.loginReducer.isLogged,
    }
}

export default connect(mapStateToProps)(Home);