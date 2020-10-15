import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'
import {Formik} from 'formik'
import * as yup from 'yup'
import { TextInput } from 'react-native-gesture-handler'
import FlatButton from '../shared/button'
import Login from './login'


const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('isnum1-5', 'Rating must be a number 1-5', (val)=>{
        return Number(val) > 0 && Number(val) < 6
    })
})



export default function Home( { navigation } ) {

    const [isLogged, setIsLogged] = useState( false );

    const handleLogin = ( bLogin ) => {
        setIsLogged( true )
    }
    const handleLogout = () => {
        setIsLogged( false )
    }

    if ( isLogged ) {
        return(
            <View style={globalStyles.container}>
                <Text>You are logged!</Text>
                <FlatButton text="Wyloguj" onPress={handleLogout}/>
            </View>
        )
    } else {
        return(
            <Login handleLogin={handleLogin}/>
        )
    }
}

const styles = StyleSheet.create({

})
