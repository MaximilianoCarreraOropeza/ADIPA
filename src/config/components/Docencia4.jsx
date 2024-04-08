import { React, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from '../firebase';
import { onValue, ref } from "firebase/database";
import SlotPrueba from '../../SlotPrueba';
import Docencia from '../../assets/docencia.png';
import Letra from '../../assets/letra_e.png';

function Docencia4() {
    const getData = async () => {
        const refData = ref(db, 'docencia4/');
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
                    <div className="row p-2">
                        <div className="col">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="col flex">
                                    {
                                        longitud > 0 && (
                                            <SlotPrueba estado={datos[1].status} exclusividad="SN" tipo="Carro" />
                                        )
                                    }
                                    {
                                        longitud > 0 && (
                                            <SlotPrueba estado={datos[2].status} exclusividad="exclusivo" tipo="Carro" />
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
                                            <SlotPrueba estado={datos[6].status} exclusividad="discapacidad" tipo="Carro" />
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
                                    {
                                        longitud > 0 && (
                                            <SlotPrueba estado={datos[12].status} exclusividad="SN" tipo="Carro" />
                                        )
                                    }
                                    <div div className="image">
                                        <img
                                            src={Docencia}
                                            width="80"
                                            height="80"
                                            className="mt-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-2 ms-3 me-3">
                        <div className="col d-flex align-items-center">
                            <div className="mb-5">
                                <img
                                    src={Letra}
                                    width="100"
                                    height="100"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col">
                            {
                                longitud > 0 && (
                                    <SlotPrueba estado={datos[13].status} exclusividad="SN" tipo="Moto" />
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
                            {
                                longitud > 0 && (
                                    <SlotPrueba estado={datos[23].status} exclusividad="SN" tipo="Carro" />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Docencia4
