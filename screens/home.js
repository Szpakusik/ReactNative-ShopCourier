import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home( { navigation } ) {
    return(
        <View style={globalStyles.container}>
            <Text>Main screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
