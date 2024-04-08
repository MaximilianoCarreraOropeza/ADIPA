import { React, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Docencia from '../../assets/docencia.png';
import Letra from '../../assets/letra_e.png';

function Cedim() {

  const getData = async () => {
    const refData = ref(db, 'cedim/');
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
      <div className="">
        <div className="container">
          <div className="row p-4">
            <div className="col d-flex align-items-center justify-content-end">
              <img src={Letra} width="90" height="90" />
            </div>
            <div className="col p-4 d-flex justify-content-end">
              <div>
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[1].status} exclusividad="SN" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[2].status} exclusividad="SN" tipo="Carro" />
                  )
                }
                <div className="imgDoc p-1">
                  <img src={Docencia} width="80" height="80" />
                </div>
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
                    <SlotPrueba estado={datos[5].status} exclusividad="exclusivo" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[6].status} exclusividad="discapacidad" tipo="Carro" />
                  )
                }
              </div>
            </div>
          </div>
          <div className="row p-4">
            <div className="col d-flex p-4">
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[7].status} exclusividad="SN" tipo="CarroVer" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[8].status} exclusividad="SN" tipo="CarroVer" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[9].status} exclusividad="SN" tipo="CarroVer" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[10].status} exclusividad="SN" tipo="CarroVer" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[11].status} exclusividad="SN" tipo="CarroVer" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[12].status} exclusividad="SN" tipo="CarroVer" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[13].status} exclusividad="SN" tipo="CarroVer" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[14].status} exclusividad="SN" tipo="CarroVer" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[15].status} exclusividad="SN" tipo="MotoVer" />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cedim