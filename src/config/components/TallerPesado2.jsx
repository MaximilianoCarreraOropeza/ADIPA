import { React, useEffect, useState } from 'react'
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Docencia from '../../assets/docencia.png';
import Letra from '../../assets/letra_e.png';

function TallerPesado2() {
  const [datos, setDatos] = useState([]);
  const [longitud, setLongitud] = useState(0);
  
  const getData = async () => {
    const refData = ref(db, 'tallerpesado2/');
    onValue(refData, (snapshot) => {
        const data = snapshot.val() || [];
        setDatos(data);
        setLongitud(data.length);
    });
  };

  useEffect(() => {
    getData();
}, []);
  
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <div className="row p-2 d-flex align-items-center me-2">
            <div className="col">
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[1].status} exclusividad="res" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[2].status} exclusividad="res" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[3].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[4].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[5].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[6].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[7].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[8].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[9].status} exclusividad="SN" tipo="Carro" />
                )
              }
            </div>
          </div>
          <div className="row p-2">
            <div className="col d-flex align-items-center">
              <img src={Letra} width="90" height="90" />
            </div>
          </div>
          <div className="row p-2">
            <div className="col ms-2">
              <div className="mb-3">
               <img src={Docencia} width="80" height="80" />
              </div>
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[10].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[11].status} exclusividad="res" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[12].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[13].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[14].status} exclusividad="SN" tipo="Carro" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[15].status} exclusividad="exclusivo" tipo="Carro" />
                ) 
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[16].status} exclusividad="exclusivo" tipo="Carro" />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TallerPesado2