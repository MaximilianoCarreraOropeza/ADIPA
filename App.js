import React from 'react'
import NavigationNotAuth from './src/modules/navegacion/navegacionSinSesion/NavigationNotAuth';
import NavigationAuth from './src/modules/navegacion/navegacionConSesion/NavigationAuth';

export default function App() {
  return (
    //le pregunte al profe y me gusto su idea, basicamente aqui debemos de poner una condicional para saber si hay sesion o nel y de aqui
    //se renderizara dependiendo si esta iniciado o no, y ya esa es la idea ya que cada navegacion es distinta y uno tiene tab y el otro solo son pantallas 
    <NavigationAuth/>
  );
}

