import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/base';
import AuthStack from './stack/AuthStack';

//este navigation es el stack que hay antes de entrar a sesion, osea no tiene iniciado sesion
export default function NavigationAuth() {
  return (
    <View>
      <Text>NavigationAuth</Text>
    </View>
  )
}
