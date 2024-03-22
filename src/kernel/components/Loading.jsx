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
            <ActivityIndicator size='large' color='green'/>
            <Text style={styles.title}>{title}</Text>
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay:{
        height: 160,
        width: 250,
        backgroundColor: 'white',
        borderColor: '#009475',
        borderWidth: 4,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#0655AA',
        textTransform: 'uppercase',
        marginTop: 16,
        fontSize: 18
    }, 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'               
    }
})