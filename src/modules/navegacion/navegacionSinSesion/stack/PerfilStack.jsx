import React from 'react'
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
            options = {{title: 'Perfil'}}
        />
        <stack.Screen
            name = 'Cambiar Contra'
            component = {CambiarContra}
            options = {{title: 'Perfil'}}
        />
    </stack.Navigator>
  )
}
