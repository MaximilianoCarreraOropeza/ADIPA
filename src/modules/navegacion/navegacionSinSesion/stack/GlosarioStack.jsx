import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Glosario from '../../../glosario/screens/Glosario';

const stack = createStackNavigator();

export default function GlosarioStack() {
  return (
    <stack.Navigator>
        <stack.Screen
            name = 'Glosario'
            component = {Glosario}
            options = {{title: 'Mapa UTEZ'}}
        />
    </stack.Navigator>
  )
}
