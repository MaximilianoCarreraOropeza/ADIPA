import { React, useEffect, useState } from 'react'
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Docencia from '../../assets/docencia.png';
import Letra from '../../assets/letra_e.png';

function CdsMotos() {

  const getData = async () => {
    const refData = ref(db, 'cdsmotos/');
    onValue(refData, (snapshot) => {
      const data = snapshot.val() || [];
      setDatos(data);
      setLongitud(data.length);
    });
  };

  const [datos, setDatos] = useState([]);
  const [longitud, setLongitud] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center ">
          <div className="row p-4">
            <div>
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[1].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[2].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[3].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[4].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[5].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[6].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[7].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[8].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[9].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[10].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[11].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[12].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              <div div className="mt-2 mb-2">
                <img src={Docencia} width="80" height="80" />
              </div>
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[13].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[14].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[15].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[16].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
            </div>
          </div>
          <div className="row p-4 ms-5">
            <div className="d-flex align-items-center">
              <img src={Letra} width="90" height="90" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CdsMotos