import React from 'react'
import { Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Perfil from '../../../perfil/screens/Perfil';
import CambiarContra from '../../../perfil/screens/CambiarContra'

const stack = createStackNavigator();

export default function PerfilStack() {
  return (
    <stack.Navigator initialRouteName='Perfil'>
        <stack.Screen
            name = 'Perfil'
            component = {Perfil}
            options = {{headerTitle: 'Perfil',
            headerStyle: {
              backgroundColor: '#002E60',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center', headerLeft: () => (
              <Image
                source={require('../../../../../assets/logo.png')}
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
          )}}
        />
        <stack.Screen
            name = 'Cambiar Contra'
            component = {CambiarContra}
        />
    </stack.Navigator>
  )
}
