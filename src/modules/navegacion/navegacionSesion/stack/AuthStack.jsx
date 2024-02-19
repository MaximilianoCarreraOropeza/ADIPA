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
            options={{ headerShown: false }}
        />
        <stack.Screen
            name = 'Contra'
            component = {CambiarContra}
            options={{ headerShown: false }}
        />
    </stack.Navigator>
  )
}

