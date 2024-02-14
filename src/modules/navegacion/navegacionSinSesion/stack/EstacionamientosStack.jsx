import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import CafeBalcon from '../../../estacionamientos/screens/CafeBalcon'
import Principal from '../../../estacionamientos/screens/Principal'
import CDS from '../../../estacionamientos/screens/CDS'
import CDSMotos from '../../../estacionamientos/screens/CDSMotos'
import Cedim from '../../../estacionamientos/screens/Cedim'
import Docencia1 from '../../../estacionamientos/screens/Docencia1'
import Docencia3 from '../../../estacionamientos/screens/Docencia3'
import Docencia3Motos from '../../../estacionamientos/screens/Docencia3Motos'
import Docencia4 from '../../../estacionamientos/screens/Docencia4'
import Docencia5 from '../../../estacionamientos/screens/Docencia5'
import Jardineras from '../../../estacionamientos/screens/Jardineras'
import TallerPesado2 from '../../../estacionamientos/screens/TallerPesado2'

const stack = createStackNavigator();

export default function EstacionamientosStack() {
  return (
    <stack.Navigator initialRouteName='Principal'>
        <stack.Screen
            name = 'Principal'
            component = {Principal}
            options = {{title: 'Mapa Utez'}}
        />
        <stack.Screen
            name = 'Cafe Balcon'
            component = {CafeBalcon}
            options = {{title: 'Cafe Balcon'}}
        />
        <stack.Screen
            name = 'CDS'
            component = {CDS}
            options = {{title: 'CDS'}}
        />
        <stack.Screen
            name = 'CDS Motos'
            component = {CDSMotos}
            options = {{title: 'CDS Motos'}}
        />
        <stack.Screen
            name = 'Cedim'
            component = {Cedim}
            options = {{title: 'Cedim'}}
        />
        <stack.Screen
            name = 'Docencia 1'
            component = {Docencia1}
            options = {{title: 'Docencia 1'}}
        />
        <stack.Screen
            name = 'Docencia 3'
            component = {Docencia3}
            options = {{title: 'Docencia 3'}}
        />
        <stack.Screen
            name = 'Docencia 3 Motos'
            component = {Docencia3Motos}
            options = {{title: 'Docencia 3 Motos'}}
        />
        <stack.Screen
            name = 'Docencia 4'
            component = {Docencia4}
            options = {{title: 'Docencia 4'}}
        />
        <stack.Screen
            name = 'Docencia 5'
            component = {Docencia5}
            options = {{title: 'Docencia 5'}}
        />
        <stack.Screen
            name = 'Jardineras'
            component = {Jardineras}
            options = {{title: 'Jardineras'}}
        />
        <stack.Screen
            name = 'Taller Pesado 2'
            component = {TallerPesado2}
            options = {{title: 'Taller Pesado 2'}}
        />
    </stack.Navigator>
  )
  }