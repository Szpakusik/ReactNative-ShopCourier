import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { globalStyles } from '../styles/global'
import {Formik} from 'formik'
import * as yup from 'yup'
import { TextInput } from 'react-native-gesture-handler'
import FlatButton from '../shared/button'
import * as LoginActions from '../actions/loginActions'

const ReviewSchema = yup.object({
    login: yup.string().required().min(4),
    password: yup.string().required().min(4),
})

const Login = function( { loginAction } ) {

    return(
        <View style={globalStyles.container}>
            <Formik initialValues={{login:"", password:""}}
                validationSchema={ReviewSchema}
                onSubmit={()=>{
                    loginAction(true);
                }
            }>
                { (formikProps)=>(
                    <View>
                        <TextInput style={globalStyles.input}
                                    placeholder="Login"
                                    onChangeText={formikProps.handleChange('login')}
                                    onBlur={formikProps.handleBlur('login')}
                                    value={formikProps.values.login}/>
                        <Text style={globalStyles.errorText}>{formikProps.touched.login && formikProps.errors.login}</Text>

                        <TextInput style={globalStyles.input}
                                    placeholder="Hasło"
                                    onChangeText={formikProps.handleChange('password')}
                                    onBlur={formikProps.handleBlur('password')}
                                    value={formikProps.values.password}/>
                        <Text style={globalStyles.errorText}>{formikProps.touched.password && formikProps.errors.password}</Text>

                        <FlatButton text="Zaloguj" onPress={formikProps.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default connect(null, LoginActions)(Login);

const styles = StyleSheet.create({

})
