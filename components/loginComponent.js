import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FlatButton from '../shared/button'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'

const LoginComponent = function( { LoginActions, ReviewSchema } ) {
    return(
        <View style={globalStyles.container}>
            <Formik initialValues={{login:"", password:""}}
                validationSchema={ReviewSchema}
                onSubmit={()=>{ LoginActions.loginAction(true);}}>

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

export default LoginComponent ;
