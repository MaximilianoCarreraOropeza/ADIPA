import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Image } from '@rneui/base';
import Restringido from '../../../../../assets/restri.png';
import Exclusivo from '../../../../../assets/exclusivo.png';
import Discapacitado from '../../../../../assets/discapacitado.png';

const SlotEstacionamiento = ({ estado, exclusividad, tipo, orientacion }) =>{
    return (
        <View style={styles.container}>
            {estado == true && exclusividad == "SN" && tipo == "carro" && orientacion == "horizontal" ? (
                <View style={styles.slotVacio} animation='none' />
            ) : estado == true && exclusividad == "res" && tipo == "carro" && orientacion == "horizontal" ? (
                <View style={styles.slotVacio} animation='none'>
                    <Image source={Restringido} style={styles.restringido} />
                </View>
            ) : estado == true && exclusividad == "discapacidad" && tipo == "carro" && orientacion == "horizontal" ? (
                <View style={styles.slotVacio} animation='none'>
                    <Image source={Discapacitado} style={styles.discapacitado} />

                </View>
            ) : estado == true && exclusividad == "discapacidad-exclusivo" && tipo == "carro" && orientacion == "horizontal" ? (
                <View style={styles.slotVacio2} animation='none'>
                    <Image source={Discapacitado} style={styles.discapacitado} />
                    <Image source={Exclusivo} style={styles.exclusivo} />
                </View>
            ) : estado == true && exclusividad == "exclusivo" && tipo == "carro" && orientacion == "horizontal" ? (
                <View style={styles.slotVacio} animation='none'>
                    <Image source={Exclusivo} style={styles.exclusivo} />
                </View>)
                //Carro -- Ocupado.
                : estado == false && exclusividad == "SN" && tipo == "carro" && orientacion == "horizontal" ? (
                    <View style={styles.slotOcupado} animation='none' />
                ) : estado == false && exclusividad == "res" && tipo == "carro" && orientacion == "horizontal" ? (
                    <View style={styles.slotOcupado} animation='none'>
                        <Image source={Restringido} style={styles.restringido} />
                    </View>
                ) : estado == false && exclusividad == "discapacidad" && tipo == "carro" && orientacion == "horizontal" ? (
                    <View style={styles.slotOcupado} animation='none'>
                        <Image source={Discapacitado} style={styles.discapacitado} />
                    </View>
                ) : estado == false && exclusividad == "exclusivo" && tipo == "carro" && orientacion == "horizontal" ? (
                    <View style={styles.slotOcupado} animation='none'>
                        <Image source={Exclusivo} style={styles.exclusivo} />
                    </View>)
                    //Moto -- Vacío
                    : estado == false && exclusividad == "discapacidad-exclusivo" && tipo == "carro" && orientacion == "horizontal" ? (
                        <View style={styles.slotOcupado2} animation='none'>
                            <Image source={Discapacitado} style={styles.discapacitado} />
                            <Image source={Exclusivo} style={styles.exclusivo} />
                        </View>
                    ) :
                        estado == true && exclusividad == "SN" && tipo == "moto" && orientacion == "horizontal" ? (
                            <View style={styles.slotVacio} animation='none' />
                        ) : estado == true && exclusividad == "res" && tipo == "moto" && orientacion == "horizontal" ? (
                            <View style={styles.slotVacio} animation='none'>
                                <Image source={Restringido} style={styles.restringido} />
                            </View>
                        ) : estado == true && exclusividad == "discapacidad" && tipo == "moto" && orientacion == "horizontal" ? (
                            <View style={styles.slotVacio} animation='none'>
                                <Image source={Discapacitado} style={styles.discapacitado} />

                            </View>
                        ) : estado == true && exclusividad == "exclusivo" && tipo == "moto" && orientacion == "horizontal" ? (
                            <View style={styles.slotVacio} animation='none'>
                                <Image source={Exclusivo} style={styles.exclusivo} />
                            </View>)
                            //Moto -- ocupado
                            : estado == false && exclusividad == "SN" && tipo == "moto" && orientacion == "horizontal" ? (
                                <View style={styles.slotOcupado} animation='none' />
                            ) : estado == false && exclusividad == "res" && tipo == "moto" && orientacion == "horizontal" ? (
                                <View style={styles.slotOcupado} animation='none'>
                                    <Image source={Restringido} style={styles.restringido} />
                                </View>
                            ) : estado == false && exclusividad == "discapacidad" && tipo == "moto" && orientacion == "horizontal" ? (
                                <View style={styles.slotOcupado} animation='none'>
                                    <Image source={Discapacitado} style={styles.discapacitado} />
                                </View>
                            ) : estado == false && exclusividad == "exclusivo" && tipo == "moto" && orientacion == "horizontal" ? (
                                <View style={styles.slotOcupado} animation='none'>
                                    <Image source={Exclusivo} style={styles.exclusivo} />
                                </View>)
                                //Bicicleta -- Vacio
                                :
                                estado == true && exclusividad == "SN" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                    <View style={styles.slotVacio} animation='none' />
                                ) : estado == true && exclusividad == "res" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                    <View style={styles.slotVacio} animation='none'>
                                        <Image source={Restringido} style={styles.restringido} />
                                    </View>
                                ) : estado == true && exclusividad == "discapacidad" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                    <View style={styles.slotVacio} animation='none'>
                                        <Image source={Discapacitado} style={styles.discapacitado} />

                                    </View>
                                ) : estado == true && exclusividad == "exclusivo" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                    <View style={styles.slotVacio} animation='none'>
                                        <Image source={Exclusivo} style={styles.exclusivo} />
                                    </View>)
                                    //Bicicleta -- Ocupado
                                    : estado == false && exclusividad == "SN" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                        <View style={styles.slotOcupado} animation='none' />
                                    ) : estado == false && exclusividad == "res" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                        <View style={styles.slotOcupado} animation='none'>
                                            <Image source={Restringido} style={styles.restringido} />
                                        </View>
                                    ) : estado == false && exclusividad == "discapacidad" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                        <View style={styles.slotOcupado} animation='none'>
                                            <Image source={Discapacitado} style={styles.discapacitado} />
                                        </View>
                                    ) : estado == false && exclusividad == "exclusivo" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                        <View style={styles.slotOcupado} animation='none'>
                                            <Image source={Exclusivo} style={styles.exclusivo} />
                                        </View>)
                                        :
                                        //Slots verticales
                                        estado == true && exclusividad == "SN" && tipo == "carro" && orientacion == "vertical" ? (
                                            <View style={styles.slotVacio1} animation='none' />
                                        ) : estado == true && exclusividad == "res" && tipo == "carro" && orientacion == "vertical" ? (
                                            <View style={styles.slotVacio1} animation='none'>
                                                <Image source={Restringido} style={styles.restringido} />
                                            </View>
                                        ) : estado == true && exclusividad == "discapacidad" && tipo == "carro" && orientacion == "vertical" ? (
                                            <View style={styles.slotVacio1} animation='none'>
                                                <Image source={Discapacitado} style={styles.discapacitado} />
                                            </View>
                                        ) : estado == true && exclusividad == "exclusivo" && tipo == "carro" && orientacion == "vertical" ? (
                                            <View style={styles.slotVacio1} animation='none'>
                                                <Image source={Exclusivo} style={styles.exclusivo} />
                                            </View>)
                                            //Carro -- Ocupado.
                                            : estado == false && exclusividad == "SN" && tipo == "carro" && orientacion == "vertical" ? (
                                                <View style={styles.slotOcupado1} animation='none' />
                                            ) : estado == false && exclusividad == "res" && tipo == "carro" && orientacion == "vertical" ? (
                                                <View style={styles.slotOcupado1} animation='none'>
                                                    <Image source={Restringido} style={styles.restringido} />
                                                </View>
                                            ) : estado == false && exclusividad == "discapacidad" && tipo == "carro" && orientacion == "vertical" ? (
                                                <View style={styles.slotOcupado1} animation='none'>
                                                    <Image source={Discapacitado} style={styles.discapacitado} />
                                                </View>
                                            ) : estado == false && exclusividad == "discapacidad-exclusivo" && tipo == "carro" && orientacion == "vertical" ? (
                                                <View style={styles.slotOcupado3} animation='none'>
                                                <Image source={Exclusivo} style={styles.exclusivo} />
                                                    <Image source={Discapacitado} style={styles.discapacitado} />
                                                </View>
                                            ) :
                                                estado == true && exclusividad == "SN" && tipo == "moto" && orientacion == "vertical" ? (
                                                    <View style={styles.slotVacio1} animation='none' />
                                                ) : estado == true && exclusividad == "res" && tipo == "moto" && orientacion == "vertical" ? (
                                                    <View style={styles.slotVacio1} animation='none'>
                                                        <Image source={Restringido} style={styles.restringido} />
                                                    </View>
                                                ) : estado == true && exclusividad == "discapacidad" && tipo == "moto" && orientacion == "vertical" ? (
                                                    <View style={styles.slotVacio1} animation='none'>
                                                        <Image source={Discapacitado} style={styles.discapacitado} />

                                                    </View>
                                                ) : estado == true && exclusividad == "exclusivo" && tipo == "moto" && orientacion == "vertical" ? (
                                                    <View style={styles.slotVacio1} animation='none'>
                                                        <Image source={Exclusivo} style={styles.exclusivo} />
                                                    </View>) : estado == true && exclusividad == "discapacidad-exclusivo" && tipo == "carro" && orientacion == "vertical" ? (
                                                        <View style={styles.slotVacio3} animation='none'>
                                                            <Image source={Exclusivo} style={styles.exclusivo} />
                                                            <Image source={Discapacitado} style={styles.discapacitado} />
                                                        </View>)
                                                    //Moto -- ocupado
                                                    : estado == false && exclusividad == "SN" && tipo == "moto" && orientacion == "vertical" ? (
                                                        <View style={styles.slotOcupado1} animation='none' />
                                                    ) : estado == false && exclusividad == "res" && tipo == "moto" && orientacion == "vertical" ? (
                                                        <View style={styles.slotOcupado1} animation='none'>
                                                            <Image source={Restringido} style={styles.restringido} />
                                                        </View>
                                                    ) : estado == false && exclusividad == "discapacidad" && tipo == "moto" && orientacion == "vertical" ? (
                                                        <View style={styles.slotOcupado1} animation='none'>
                                                            <Image source={Discapacitado} style={styles.discapacitado} />
                                                        </View>
                                                    ) : estado == false && exclusividad == "exclusivo" && tipo == "moto" && orientacion == "vertical" ? (
                                                        <View style={styles.slotOcupado1} animation='none'>
                                                            <Image source={Exclusivo} style={styles.exclusivo} />
                                                        </View>)
                                                        //Bicicleta -- Vacio
                                                        :
                                                        estado == true && exclusividad == "SN" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                            <View style={styles.slotVacio1} animation='none' />
                                                        ) : estado == true && exclusividad == "res" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                            <View style={styles.slotVacio1} animation='none'>
                                                                <Image source={Restringido} style={styles.restringido} />
                                                            </View>
                                                        ) : estado == true && exclusividad == "discapacidad" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                            <View style={styles.slotVacio1} animation='none'>
                                                                <Image source={Discapacitado} style={styles.discapacitado} />

                                                            </View>
                                                        ) : estado == true && exclusividad == "exclusivo" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                            <View style={styles.slotVacio1} animation='none'>
                                                                <Image source={Exclusivo} style={styles.exclusivo} />
                                                            </View>)
                                                            //Bicicleta -- Ocupado
                                                            : estado == false && exclusividad == "SN" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                                <View style={styles.slotOcupado1} animation='none' />
                                                            ) : estado == false && exclusividad == "res" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                                <View style={styles.slotOcupado1} animation='none'>
                                                                    <Image source={Restringido} style={styles.restringido} />
                                                                </View>
                                                            ) : estado == false && exclusividad == "discapacidad" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                                <View style={styles.slotOcupado1} animation='none'>
                                                                    <Image source={Discapacitado} style={styles.discapacitado} />
                                                                </View>
                                                            ) : estado == false && exclusividad == "exclusivo" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                                <View style={styles.slotOcupado1} animation='none'>
                                                                    <Image source={Exclusivo} style={styles.exclusivo} />
                                                                </View>)
                                                                : console.log("")}
        </View>
    );
};

const styles = StyleSheet.create({
    slotOcupado: {
        width: 80,
        height: 40,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#E5A800',
        borderTopColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slotVacio: {
        width: 80,
        height: 40,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#E5A800',
        borderTopColor: '#E5A800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slotOcupado1: {
        width: 40,
        height: 80,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slotVacio1: {
        width: 40,
        height: 80,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slotVacio2: {
        width: 80,
        height: 40,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#E5A800',
        borderTopColor: '#E5A800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slotOcupado2: {
        width: 80,
        height: 40,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#E5A800',
        borderTopColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slotOcupado3: {
        width: 40,
        height: 80,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slotVacio3: {
        width: 40,
        height: 80,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    restringido: {
        width: 25,
        height: 24,
    },
    exclusivo: {
        width: 25,
        height: 24,
    },
    discapacitado: {
        width: 25,
        height: 24,
    }
})

export default SlotEstacionamiento

