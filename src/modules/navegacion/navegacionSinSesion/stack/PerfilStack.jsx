import React from 'react'
import { Image, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Perfil from '../../../perfil/screens/Perfil';
import CambiarContra from '../../../perfil/screens/CambiarContra';
import logo from "../../../../../assets/logo.png";

const stack = createStackNavigator();

export default function PerfilStack() {
    const logoapp = logo;
    return (
    <stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#002E60',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerRight: () => (
          <Image
            source={logoapp}
            style={styles.img}
          />
      )
      }}>
      <stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerTitle: "Perfil" }}
        />
        <stack.Screen
          name="CambiarContra"
          component={CambiarContra}
          options={{
            headerTitle: "Cambiar Contraseña"
          }}
        />
    </stack.Navigator>
  )
}


const styles = StyleSheet.create({
    img: {
      width: 25,
      height: 30,
      marginRight: 15,
    }
  });

