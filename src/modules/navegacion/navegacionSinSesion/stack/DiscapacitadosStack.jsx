import React from 'react'
import { Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Discapcitados from '../../../discapacitados/screens/Discapacitado';

const stack = createStackNavigator();

export default function DiscapacitadosStack() {
  return (
    <stack.Navigator>
        <stack.Screen
            name = 'Discapacitados'
            component = {Discapcitados}
            options = {{headerTitle: 'Mapa UTEZ',
            headerStyle: {
              backgroundColor: '#002E60',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Image
                source={require('../../../../../assets/logo.png')}
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
          )}}
        />
    </stack.Navigator>
  )
}
