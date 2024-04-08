import React, { useState, useEffect } from "react";
import NavigationNotAuth from './src/modules/navegacion/navegacionSinSesion/NavigationNotAuth';
import NavigationAuth from './src/modules/navegacion/navegacionConSesion/NavigationAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('session');
      if (value !== null) {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    isAuthenticated ? <NavigationAuth setIsAuthenticated={setIsAuthenticated}/> : <NavigationNotAuth setIsAuthenticated={setIsAuthenticated}/>
  );
}

