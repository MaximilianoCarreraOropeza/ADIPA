import React from 'react'
import NavigationAuth from './src/modules/navegacion/navegacionSesion/NavigationAuth';
import NavigationWithOutAuth from './src/modules/navegacion/navegacionSinSesion/NavigationWithOutAuth';

export default function App() {
  return (
    //le pregunte al profe y me gusto su idea, basicamente aqui debemos de poner una condicional para saber si hay sesion o nel y de aqui
    //se renderizara dependiendo si esta iniciado o no, y ya esa es la idea ya que cada navegacion es distinta y uno tiene tab y el otro solo son pantallas 
    <NavigationAuth/>
  );
}

