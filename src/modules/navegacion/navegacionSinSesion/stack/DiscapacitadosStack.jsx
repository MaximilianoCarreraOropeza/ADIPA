import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Discapcitados from '../../../discapacitados/screens/Discapacitado';

const stack = createStackNavigator();

export default function DiscapacitadosStack() {
  return (
    <stack.Navigator>
        <stack.Screen
            name = 'Discapacitados'
            component = {Discapcitados}
            options = {{title: 'Mapa UTEZ'}}
        />
    </stack.Navigator>
  )
}
