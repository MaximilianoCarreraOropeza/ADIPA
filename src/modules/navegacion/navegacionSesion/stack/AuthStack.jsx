import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../../autorizacion/screens/Login';
import CambiarContra from '../../../autorizacion/screens/RecuperaCuenta';

const stack = createStackNavigator();

export default function AuthStack() {
  return (
    <stack.Navigator>
        <stack.Screen
            name = 'Login'
            component = {Login}
        />
        <stack.Screen
            name = 'Contra'
            component = {CambiarContra}
        />
    </stack.Navigator>
  )
}

