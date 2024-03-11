import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '@rneui/base'

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }, 
  card: {
    width: '90%',
    padding: 20,
    margin: 20
  }
})