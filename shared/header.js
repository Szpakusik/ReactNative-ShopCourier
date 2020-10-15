import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header ( {navigation, title} ) {
    const openMenu = () => {
        navigation.openDrawer()
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={ openMenu } style={styles.icon} />
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#666',
        letterSpacing: 1,
    },
    headerTitle:{
        flexDirection: 'row',
    },
    icon: {
        position: 'absolute',
        left: 0,
    },
    headerImage:{
        height: 29,
        width: 29,
        marginHorizontal: 10
    }
})