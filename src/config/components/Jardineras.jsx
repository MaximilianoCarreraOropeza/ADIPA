import { React, useEffect, useState } from 'react'
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Letra from '../../assets/letra_e.png';

function Jardineras() {
  const getData = async () => {
    const refData = ref(db, 'jardineras/');
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
          <div className="row p-2 me-4">
            <div className="row">
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
              <div className="row mt-4">
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
                </div>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="row d-flex align-items-center">
              <div className="col">
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[23].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[24].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[25].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[26].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[27].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[28].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[29].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[30].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[31].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[32].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[33].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
                <div className="transfom">
                  {
                    longitud > 0 && (
                      <SlotPrueba estado={datos[34].status} exclusividad="res" tipo="Carro" />
                    )
                  }
                </div>
              </div>
            </div>

          </div>
          <div className="row p-2 d-flex align-items-center ">
            <div>
              <img src={Letra} width="100" height="100" className="mt-5" />
            </div>
          </div>
          <div className="row p-2">
            <div className="row">
              <div className="transfomAll">
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
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[45].status} exclusividad="SN" tipo="Carro" />
                  )
                }
              </div>
            </div>
            <div className="row mt-5">
              <div className="transfomAll2">
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[46].status} exclusividad="SN" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[47].status} exclusividad="SN" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[48].status} exclusividad="SN" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[49].status} exclusividad="SN" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[50].status} exclusividad="res" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[51].status} exclusividad="res" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[52].status} exclusividad="res" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[53].status} exclusividad="res" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[54].status} exclusividad="res" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[55].status} exclusividad="res" tipo="Carro" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[46].status} exclusividad="res" tipo="Carro" />
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

export default Jardineras