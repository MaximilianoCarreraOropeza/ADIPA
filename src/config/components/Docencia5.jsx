import { React, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Docencia from '../../assets/docencia.png';
import Letra from '../../assets/letra_e.png';

function Docencia5() {

    const getData = async () => {
        const refData = ref(db, 'docencia5/');
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
                    <div className="row">
                        <div className="d-flex ms-5">
                            {
                                longitud > 0 && (
                                    <SlotPrueba estado={datos[1].status} exclusividad="SN" tipo="CarroVer" />
                                )
                            }
                            {
                                longitud > 0 && (
                                    <SlotPrueba estado={datos[2].status} exclusividad="SN" tipo="CarroVer" />
                                )
                            }
                            {
                                longitud > 0 && (
                                    <SlotPrueba estado={datos[3].status} exclusividad="SN" tipo="CarroVer" />
                                )
                            }
                            {
                                longitud > 0 && (
                                    <SlotPrueba estado={datos[4].status} exclusividad="SN" tipo="CarroVer" />
                                )
                            }
                            {
                                longitud > 0 && (
                                    <SlotPrueba estado={datos[5].status} exclusividad="SN" tipo="CarroVer" />
                                )
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-end">
                            <img src={Docencia} width="80" height="80" />
                        </div>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <div>
                            <img src={Letra} width="90" height="90" />
                        </div>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <div>
                            {
                                longitud > 0 && (
                                    <SlotPrueba estado={datos[6].status} exclusividad="SN" tipo="Moto" />
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
                                    <SlotPrueba estado={datos[9].status} exclusividad="exclusivo" tipo="Carro" />
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col d-flex">
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
                                <SlotPrueba estado={datos[15].status} exclusividad="SN" tipo="CarroVer" />
                            )
                        }
                        {
                            longitud > 0 && (
                                <SlotPrueba estado={datos[16].status} exclusividad="SN" tipo="CarroVer" />
                            )
                        }
                        {
                            longitud > 0 && (
                                <SlotPrueba estado={datos[17].status} exclusividad="SN" tipo="CarroVer" />
                            )
                        }
                        {
                            longitud > 0 && (
                                <SlotPrueba estado={datos[18].status} exclusividad="discapacidad" tipo="CarroVer" />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default Docencia5