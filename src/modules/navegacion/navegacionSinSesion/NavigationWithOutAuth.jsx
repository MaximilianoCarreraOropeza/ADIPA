import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilStack from './stack/PerfilStack';
import EstacionamientosStack from './stack/EstacionamientosStack';
import DiscapacitadosStack from './stack/DiscapacitadosStack'; ;
import GlosarioStack from './stack/GlosarioStack';
import {Icon} from '@rneui/base';

const Tab = createBottomTabNavigator();

//esta navegacion aparte que tiene los iconos, es el navigation cuando este iniciado sesion 
export default function NavigationWithOutAuth() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                const { iconName, iconType } = getIconName(route.name, focused);
                
                return <Icon name={iconName} type={iconType} size={size} color={color} />
            }, 
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
        })}
      >
        <Tab.Screen name= 'PerfilStack' component={PerfilStack} options={{title: 'Perfil'}}/>
        <Tab.Screen name= 'EstacionamientosStack' component={EstacionamientosStack} options={{title: 'Mapa Principal'}}/>
        <Tab.Screen name= 'DiscapacitadosStack' component={DiscapacitadosStack} options={{title: 'Discapacitados'}}/>
        <Tab.Screen name= 'GlosarioStack' component={GlosarioStack} options={{title: 'Mapa Glosario'}}/>    
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const getIconName = (routeName, focused) => {
  let iconName = '';
  let iconType = '';
  
  switch (routeName) {
    case 'EstacionamientosStack':
      iconName = focused ? 'home' : 'home-outline';
      iconType = 'material-community'; 
    break;
    case 'PerfilStack':
      iconName = focused ? 'account' : 'account-outline';
      iconType = 'material-community'; 
    break;
    case 'DiscapacitadosStack':
      iconName = focused ? 'wheelchair-accessibility' : 'human-wheelchair';
      iconType = 'material-community'; 
    break;
    case 'GlosarioStack':
      iconName = focused ? 'book-open-page-variant' : 'book-open-page-variant-outline';
      iconType = 'material-community'; 
    break;
  }
  return { iconName, iconType };
};