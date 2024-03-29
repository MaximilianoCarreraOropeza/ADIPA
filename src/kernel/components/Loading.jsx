import { StyleSheet, Text, View,  ActivityIndicator } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/base'

export default function Loading(props) {
const { visible, title } = props
  return (
    <Overlay
        isVisible={visible}
        windowsBackgroundColor='rgb(0,0,0,0,5)'
        overlayBackgroundColor='transparent'
        overlayStyle={styles.overlay}
    >
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#002E60'/>
            <Text style={styles.title}>{title}</Text>
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay:{
        height: 200,
        width: 350,
        backgroundColor: 'white',
        borderColor: '#002E60',
        borderWidth: 4,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#002E60',
        marginTop: 16,
        fontSize: 18
    }, 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'               
    }
})