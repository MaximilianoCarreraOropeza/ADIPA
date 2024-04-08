import { React, useEffect, useState } from 'react'
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Letra from '../../assets/letra_e.png';
import Calle from "../../assets/Calle.png";

function Docencia3Motos() {

  const getData = async () => {
    const refData = ref(db, 'motosdocencia3/');
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
      <div className="container d-flex">
        <div className="col p-3">
          <div className="col">
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
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[17].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[18].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[19].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
          </div>
        </div>
        <div className="col p-3">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex">
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[20].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }

                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[21].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }

                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[22].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }

                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[23].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }

                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[24].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[25].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center mt-5">
              <div>
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[26].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[27].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[28].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[29].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[30].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[31].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[32].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[33].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[34].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[35].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[36].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[37].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[38].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <div className="d-flex">
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[39].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[40].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[41].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[42].status} exclusividad="SN" tipo="MotocicletaVer" />
                  )
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-start align-items-center mt-5">
              <div>
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[43].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[44].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[45].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[46].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[47].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[48].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[49].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[50].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[51].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[52].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[53].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[54].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
                {
                  longitud > 0 && (
                    <SlotPrueba estado={datos[55].status} exclusividad="SN" tipo="Motocicleta" />
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="row d-flex">
            <div>
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[56].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[57].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[58].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
              {
                longitud > 0 && (
                  <SlotPrueba estado={datos[59].status} exclusividad="SN" tipo="Motocicleta" />
                )
              }
            </div>
          </div>
          <div className="row mt-5">
            <img src={Letra} width="100" height="90" />
          </div>
        </div>
        <div className="col p-3">
          <img src={Calle} width="100" height="600" />
        </div>
        <div className="col p-3">
          <div className="col">
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[60].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[61].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[62].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[63].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[64].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[65].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[66].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[67].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[68].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[69].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[70].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[71].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[72].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[73].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[74].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[75].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[76].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
            {
              longitud > 0 && (
                <SlotPrueba estado={datos[77].status} exclusividad="SN" tipo="Motocicleta" />
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Docencia3Motos