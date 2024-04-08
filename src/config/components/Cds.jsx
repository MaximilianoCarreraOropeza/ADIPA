import { React, useEffect, useState } from 'react'
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Docencia from '../../assets/docencia.png';
import Letra from '../../assets/letra_e.png';

function Cds() {
    const getData = async () => {
        const refData = ref(db, 'cds/');
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
        <div className="row">
            <div className="row ms-4">
                <div  className="col d-flex justify-content-start ">
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[1].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[2].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[3].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[4].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[5].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                </div>
            </div>  
            <div className="row ms-5">
                <div className="col d-flex justify-content-end">
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[6].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[7].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[8].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[9].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[10].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[11].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[12].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[13].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[14].status} exclusividad="SN" tipo="MotoVer"/>
                        )
                    }
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col p-3">
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[15].status} exclusividad="exclusivo" tipo="Carro"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[16].status} exclusividad="exclusivo" tipo="Carro"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[17].status} exclusividad="exclusivo" tipo="Carro"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[18].status} exclusividad="exclusivo" tipo="Carro"/>
                        )
                    }
          </div>
          <div className="col p-3 d-flex justify-content-start align-items-center">
            <div>
              <img src={Letra} width="80" height="80" />
            </div>
          </div>
        </div>
        <div className="row ms-5">
          <div className="p-3">
            <div className="d-flex justify-content-center">
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[19].status} exclusividad="discapacidad-exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[20].status} exclusividad="discapacidad-exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[21].status} exclusividad="discapacidad-exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[22].status} exclusividad="discapacidad-exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[23].status} exclusividad="discapacidad-exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[24].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[25].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[26].status} exclusividad="exclusivo" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[27].status} exclusividad="SN" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[28].status} exclusividad="SN" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[29].status} exclusividad="SN" tipo="CarroVer"/>
                        )
                    }
                    {
                        longitud > 0 && (
                            <SlotPrueba estado={datos[30].status} exclusividad="discapacidad" tipo="CarroVer"/>
                        )
                    }
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center me-3 mt-2">
              <img src={Docencia} width="80" height="80"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cds