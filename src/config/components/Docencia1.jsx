import { React, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Docencia from '../../assets/docencia.png';
import Letra from '../../assets/letra_e.png';

function Docencia1() {
  const [data, setData] = useState([])
  const [longitud, setLongitud] = useState(0)

    const getData = async () => {
        const datosRef = ref(db, 'docencia1/');
        onValue(datosRef, (snapshot) => {
            const datos = snapshot.val() || [];
            setData(datos);
            setLongitud(datos.length);
        });
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <img src={Docencia} width="60" height="60" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex align-items-center">
              <img src={Letra} width="80" height="80" />
            </div>
            <div className="col">    
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[1].status} exclusividad="exclusivo" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[2].status} exclusividad="exclusivo" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[3].status} exclusividad="exclusivo" tipo="Carro" />
                    )
                }                                  
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[4].status} exclusividad="exclusivo" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[5].status} exclusividad="SN" tipo="Bicicleta" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[6].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[7].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[8].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[9].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[10].status} exclusividad="discapacidad" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[11].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                        <SlotPrueba estado={data[12].status} exclusividad="SN" tipo="Carro" />
                    )
                }
            </div>
          </div>
      </div>
    </>
  )
}

export default Docencia1
