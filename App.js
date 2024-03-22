import React, { useState } from "react";
import NavigationNotAuth from './src/modules/navegacion/navegacionSinSesion/NavigationNotAuth';
import NavigationAuth from './src/modules/navegacion/navegacionConSesion/NavigationAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // value previously stored
        setIsAuthenticated(true);
      }
      console.log(value);
    } catch (e) {
      console.log(e);
    }
  };
  //AsyncStorage.getItem('token');
  return (
    isAuthenticated ? <NavigationAuth/> : <NavigationNotAuth setIsAuthenticated={setIsAuthenticated}/>
  );
}

