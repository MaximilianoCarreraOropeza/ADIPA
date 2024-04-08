import { React, useEffect, useState } from 'react'
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Docencia from '../../assets/docencia.png';
import Letra from '../../assets/letra_e.png';

function Docencia3() {
  const getData = async () => {
    const refData = ref(db, 'docencia3/');
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
    <div className='row ms-5'>
      <div className='mb-3 d-flex justify-content-center'>
        <img src={Docencia} width="80" height="80" />
      </div>
      <div className='d-flex justify-content-center'>
        <img src={Letra} width="80" height="80" />
      </div>
    </div>
    <div className="row">
      <div className="d-flex">
        <div className="row">
          <div className="row mb-5">
              <div className='d-flex justify-content-center'>
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
                </div>
              </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center">
              <div>
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[3].status} exclusividad="discapacidad" tipo="Carro" />
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
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[10].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[11].status} exclusividad="SN" tipo="Carro" />
                    )
                }
              </div>
            </div>
          </div> 
        </div>
        <div className="row mt-5 p-1">
          <div className="d-flex justify-content-center mx-2">
            <div>
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
                      <SlotPrueba estado={datos[15].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[16].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[17].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[18].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[19].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[20].status} exclusividad="SN" tipo="Carro" />
                    )
                }
            </div>
          </div>
        </div>
        <div className="row mt-5 p-1">
          <div className="d-flex justify-content-center me-2">
            <div>
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[21].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[22].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[23].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[24].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[25].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[26].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[27].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[28].status} exclusividad="SN" tipo="Carro" />
                    )
                }
            </div>
          </div>
        </div>
        <div className="row mt-5 p-1">
          <div className="d-flex justify-content-center mx-2">
            <div>
            {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[29].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[30].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[31].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[32].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[33].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[34].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[35].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[36].status} exclusividad="SN" tipo="Carro" />
                    )
                }
            </div>
          </div>
        </div>
        <div className="row mt-5 p-1">
          <div className="d-flex justify-content-center me-2">
            <div>
            {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[37].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[38].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[39].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[40].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[41].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[42].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[43].status} exclusividad="SN" tipo="Carro" />
                    )
                }
                {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[44].status} exclusividad="SN" tipo="Carro" />
                    )
                }
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Docencia3

{
  /*
    imagen de entrada
    <div className="col d-flex justify-content-center mb-3 ms-5">
            <div>
              <img src={Docencia} width="80" height="80" />
            </div>
          </div>
          image de letra
          <div className="col">
            <div className="d-flex justify-content-center">
            </div>
          </div>
    
  */
}