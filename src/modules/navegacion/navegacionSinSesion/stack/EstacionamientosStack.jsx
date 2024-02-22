import React from 'react'
import {Image } from 'react-native';
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
            options = {{
            headerStyle: {
              backgroundColor: '#002E60',
            },
            headerTintColor: '#fff',
            headerTitle: 'Mapa UTEZ',
            headerTitleAlign: 'center',
            headerLeft: () => (
                <Image
                  source={require('../../../../../assets/logo.png')}
                  style={{ width: 30, height: 30, marginLeft: 10 }}
                />
            )
        }}
        />
        <stack.Screen
            name = 'CafeBalcon'
            component = {CafeBalcon}
            options = {{headerTitle: 'Cafe Balcon',
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
        <stack.Screen
            name = 'CDS'
            component = {CDS}
            options = {{headerTitle: 'CDS',
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
        <stack.Screen
            name = 'CDSMotos'
            component = {CDSMotos}
            options = {{headerTitle: 'CDS Motos',
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
        <stack.Screen
            name = 'Cedim'
            component = {Cedim}
            options = {{headerTitle: 'Cedim',
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
        <stack.Screen
            name = 'Docencia1'
            component = {Docencia1}
            options = {{headerTitle: 'Docencia 1',
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
        <stack.Screen
            name = 'Docencia3'
            component = {Docencia3}
            options = {{headerTitle: 'Docencia 3',
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
        <stack.Screen
            name = 'Docencia3Motos'
            component = {Docencia3Motos}
            options = {{headerTitle: 'Docencia 3 Motos',
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
        <stack.Screen
            name = 'Docencia4'
            component = {Docencia4}
            options = {{headerTitle: 'Docencia 4',
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
        <stack.Screen
            name = 'Docencia5'
            component = {Docencia5}
            options = {{headerTitle: 'Docencia 5',
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
            name = 'Jardineras'
            component = {Jardineras}
            options = {{headerTitle: 'Jardineras',
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
        <stack.Screen
            name = 'TallerPesado2'
            component = {TallerPesado2}
            options = {{headerTitle: 'Taller Pesado 2',
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