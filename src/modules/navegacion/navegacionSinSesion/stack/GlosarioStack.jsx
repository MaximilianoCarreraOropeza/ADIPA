import React from 'react'
import { Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Glosario from '../../../glosario/screens/Glosario';
import Perfil from '../../../perfil/screens/Perfil';
import CambiarContra from '../../../perfil/screens/CambiarContra';

const stack = createStackNavigator();

export default function GlosarioStack() {
  return (
    <stack.Navigator screenOptions={{
      headerTitle: "Mapa UTEZ",
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
    )
    }}>
        <stack.Screen
            name = 'GlosarioScreen'
            component = {Glosario}
        />
        <stack.Screen
          name="PerfilGlo"
          component={Perfil}
          options={{ headerTitle: "Perfil" }}
        />
        <stack.Screen
          name="CambiarContraGlo"
          component={CambiarContra}
          options={{
            headerTitle: ""
          }}
        />
    </stack.Navigator>
  )
}
