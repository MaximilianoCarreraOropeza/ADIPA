import React from 'react'
import { Image, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Glosario from '../../../glosario/screens/Glosario';
import logo from "../../../../../assets/logo.png";

const stack = createStackNavigator();

export default function GlosarioStack() {
  const logoapp = logo;
  return (
    <stack.Navigator screenOptions={{
      headerTitle: "Glosario",
      headerStyle: {
        backgroundColor: '#002E60',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerRight: () => (
        <Image
          source={logoapp}
          style={styles.img}
        />
    )
    }}>
        <stack.Screen
            name = 'GlosarioScreen'
            component = {Glosario}
        />
    </stack.Navigator>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 30,
    marginRight: 15,
  }
})

