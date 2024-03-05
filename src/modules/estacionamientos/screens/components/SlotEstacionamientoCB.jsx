import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Image } from '@rneui/base';
import Restringido from '../../../../../assets/restri.png';
import Exclusivo from '../../../../../assets/exclusivo.png';
import Discapacitado from '../../../../../assets/discapacitado.png';
import Motos from '../../../../../assets/motos.png';
import Bicicletas from '../../../../../assets/bici.png';

const SlotEstacionamiento = ({ estado, exclusividad, tipo, orientacion }) =>{
    return (
        <View style={styles.container}>
            {
                // Slots Horizontales...
                // Verde -- Carro -- Horizontal.
                estado == true && exclusividad == "SN" && tipo == "carro" && orientacion == "horizontal" ? (
                    <View style={styles.slotVacio} animation='none' />
                ) : estado == true && exclusividad == "res" && tipo == "carro" && orientacion == "horizontal" ? (
                    <View style={styles.slotVacio} animation='none'>
                        <Image source={Restringido} style={styles.restringido} />
                    </View>
                ) : estado == true && exclusividad == "discapacidad" && tipo == "carro" && orientacion == "horizontal" ? (
                    <View style={styles.slotVacio} animation='none'>
                        <Image source={Discapacitado} style={styles.discapacitado} />
                    </View>
                ) :
                    // Verde -- Discapacidad - Exclusivo -- Horizontal
                    estado == true && exclusividad == "discapacidad-exclusivo" && tipo == "carro" && orientacion == "horizontal" ? (
                        <View style={styles.slotVacio} animation='none'>
                            <Image source={Discapacitado} style={styles.discapacitado} />
                            <Image source={Exclusivo} style={styles.exclusivo} />
                        </View>
                    ) : estado == true && exclusividad == "exclusivo" && tipo == "carro" && orientacion == "horizontal" ? (
                        <View style={styles.slotVacio} animation='none'>
                            <Image source={Exclusivo} style={styles.exclusivo} />
                        </View>)
                        // Rojo -- Carro -- Horizontal.
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
                            // Rojo -- Discapacidad - Exclusivo -- Horizontal
                            : estado == false && exclusividad == "discapacidad-exclusivo" && tipo == "carro" && orientacion == "horizontal" ? (
                                <View style={styles.slotOcupado2} animation='none'>
                                    <Image source={Discapacitado} style={styles.discapacitado} />
                                    <Image source={Exclusivo} style={styles.exclusivo} />
                                </View>
                            )
                                // Verde -- Moto -- Horizontal.
                                : estado == true && exclusividad == "SN" && tipo == "moto" && orientacion == "horizontal" ? (
                                    <View style={styles.slotVacioMoto} animation='none'>
                                        <Image source={Motos} style={styles.motos} />
                                    </View>
                                )
                                    // Rojo -- Moto -- Horizontal.
                                    : estado == false && exclusividad == "SN" && tipo == "moto" && orientacion == "horizontal" ? (
                                        <View style={styles.slotOcupadoMoto} animation='none' >
                                            <Image source={Motos} style={styles.motos} />
                                        </View>
                                    )
                                        // Verde -- Bicicleta -- Horizontal.
                                        :
                                        estado == true && exclusividad == "SN" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                            <View style={styles.slotVacioBici} animation='none'>
                                                <Image source={Bicicletas} style={styles.bicicletas} />
                                            </View>
                                        )
                                            // Rojo -- Bicicleta -- Horizontal.
                                            : estado == false && exclusividad == "SN" && tipo == "bicicleta" && orientacion == "horizontal" ? (
                                                <View style={styles.slotOcupadoBici} animation='none'>
                                                    <Image source={Bicicletas} style={styles.bicicletas} />
                                                </View>
                                            )
                                                :
                                                // Slots verticales...
                                                // Verde -- Carro -- Vertical.
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
                                                    // Rojo -- Carro -- Vertical.
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
                                                    ) : estado == false && exclusividad == "exclusivo" && tipo == "carro" && orientacion == "vertical" ? (
                                                        <View style={styles.slotOcupado1} animation='none'>
                                                            <Image source={Exclusivo} style={styles.exclusivo} />
                                                        </View>
                                                    ) :
                                                        // Rojo -- Discapacidad - Exclusivo -- Vertical
                                                        estado == false && exclusividad == "discapacidad-exclusivo" && tipo == "carro" && orientacion == "vertical" ? (
                                                            <View style={styles.slotOcupado3} animation='none'>
                                                                <Image source={Exclusivo} style={styles.exclusivo} />
                                                                <Image source={Discapacitado} style={styles.discapacitado} />
                                                            </View>
                                                        ) :
                                                            // Verde -- Moto -- Vertical.
                                                            estado == true && exclusividad == "SN" && tipo == "moto" && orientacion == "vertical" ? (
                                                                <View style={styles.slotVacioMoto1} animation='none'>
                                                                    <Image source={Motos} style={styles.motos} />
                                                                </View>
                                                            ) :
                                                                // Verde -- Discapacidad - Exclusivo -- Vertical
                                                                estado == true && exclusividad == "discapacidad-exclusivo" && tipo == "carro" && orientacion == "vertical" ? (
                                                                    <View style={styles.slotVacio3} animation='none'>
                                                                        <Image source={Exclusivo} style={styles.exclusivo} />
                                                                        <Image source={Discapacitado} style={styles.discapacitado} />
                                                                    </View>)
                                                                    // Rojo -- Moto -- Vertical.
                                                                    : estado == false && exclusividad == "SN" && tipo == "moto" && orientacion == "vertical" ? (
                                                                        <View style={styles.slotOcupadoMoto1} animation='none'>
                                                                            <Image source={Motos} style={styles.motos} />
                                                                        </View>
                                                                    )
                                                                        // Verde -- Bicicleta -- Vertical.
                                                                        :
                                                                        estado == true && exclusividad == "SN" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                                            <View style={styles.slotVacioBici1} animation='none'>
                                                                                <Image source={Bicicletas} style={styles.bicicletas} />
                                                                            </View>
                                                                        )
                                                                            // Rojo -- Bicicleta -- Vertical.
                                                                            : estado == false && exclusividad == "SN" && tipo == "bicicleta" && orientacion == "vertical" ? (
                                                                                <View style={styles.slotOcupadoBici1} animation='none'>
                                                                                    <Image source={Bicicletas} style={styles.bicicletas} />
                                                                                </View>
                                                                            )
                                                                                // Verde -- Moto -- Docencias-Motos -- Horizontal.
                                                                                : estado == true && exclusividad == "SN" && tipo == "motocicleta" && orientacion == "horizontal" ? (
                                                                                    <View style={styles.slotVacioMotocicleta} animation='none' />
                                                                                )
                                                                                    // Rojo -- Moto -- Docencias-Motos -- Horizontal.
                                                                                    : estado == false && exclusividad == "SN" && tipo == "motocicleta" && orientacion == "horizontal" ? (
                                                                                        <View style={styles.slotOcupadoMotocicleta} animation='none' />
                                                                                    )
                                                                                        // Verde -- Moto -- Docencias-Motos -- Vertical
                                                                                        : estado == true && exclusividad == "SN" && tipo == "motocicleta" && orientacion == "vertical" ? (
                                                                                            <View style={styles.slotVacioMotocicleta1} animation='none' />
                                                                                        )
                                                                                            // Rojo -- Moto -- Docencias-Motos -- Vertical
                                                                                            : estado == false && exclusividad == "SN" && tipo == "motocicleta" && orientacion == "vertical" ? (
                                                                                                <View style={styles.slotOcupadoMotocicleta1} animation='none' />
                                                                                            )
                                                                                                : console.log("")}
        </View>
    );
};

const styles = StyleSheet.create({
    // Horizontal-Espacio-Rojo
    slotOcupado: {
        width: 80,
        height: 30,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#E5A800',
        flexDirection: 'row',
        borderTopColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Horizontal-Espacio-Verde
    slotVacio: {
        width: 80,
        height: 30,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderTopWidth: 2,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#E5A800',
        borderTopColor: '#E5A800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Rojo
    slotOcupado1: {
        width: 30,
        height: 80,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Verde
    slotVacio1: {
        width: 30,
        height: 80,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Horizontal-Espacio-Verde-Moto
    slotVacioMoto: {
        width: 80,
        height: 60,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        flexDirection: 'row',
        borderBottomColor: '#E5A800',
        borderTopColor: '#E5A800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Verde
    slotVacioMoto1: {
        width: 60,
        height: 80,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Horizontal-Espacio-Rojo
    slotOcupadoMoto: {
        width: 80,
        height: 60,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#E5A800',
        flexDirection: 'row',
        borderTopColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Rojo
    slotOcupadoMoto1: {
        width: 60,
        height: 80,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Horizontal-Espacio-Rojo-Discapacidad-Exclusivo
    slotOcupado2: {
        width: 80,
        height: 30,
        borderTopWidth: 2,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#E5A800',
        borderTopColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Rojo-Discapacidad-Exclusivo
    slotOcupado3: {
        width: 30,
        height: 80,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        flexDirection: 'column',
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Verde-Discapacidad-Exclusivo
    slotVacio3: {
        width: 30,
        height: 80,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderLeftWidth: 2,
        flexDirection: 'column',
        borderRightWidth: 2,
        borderLeftColor: '#E5A800',
        borderRightColor: '#E5A800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Horizontal-Espacio-Verde-Bici
    slotVacioBici: {
        width: 80,
        height: 30,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderTopWidth: 2,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#E57C00',
        borderTopColor: '#E57C00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Verde-Bici
    slotVacioBici1: {
        width: 30,
        height: 80,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E57C00',
        borderRightColor: '#E57C00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Horizontal-Espacio-Rojo-Bici
    slotOcupadoBici: {
        width: 80,
        height: 30,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        flexDirection: 'row',
        borderBottomColor: '#E57C00',
        borderTopColor: '#E57C00',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Rojo-Bici
    slotOcupadoBici1: {
        width: 30,
        height: 80,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E57C00',
        borderRightColor: '#E57C00',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Horizontal-Espacio-Verde-Motocicletas
    slotVacioMotocicleta: {
        width: 80,
        height: 30,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        flexDirection: 'row',
        borderBottomColor: '#E57C00',
        borderTopColor: '#E57C00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Horizontal-Espacio-Rojo-Motocicletas
    slotOcupadoMotocicleta: {
        width: 80,
        height: 30,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#E57C00',
        flexDirection: 'row',
        borderTopColor: '#E57C00',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Verde-Motocicletas
    slotVacioMotocicleta1: {
        width: 30,
        height: 80,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E57C00',
        borderRightColor: '#E57C00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Vertical-Espacio-Rojo-Motocicletas
    slotOcupadoMotocicleta1: {
        width: 30,
        height: 80,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#E57C00',
        borderRightColor: '#E57C00',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Logo restringido
    restringido: {
        width: 25,
        height: 24,
    },
    // Logo Exclusivo
    exclusivo: {
        width: 25,
        height: 24,
    },
    // Logo Discapacitado
    discapacitado: {
        width: 25,
        height: 24,
    },
    // Logo Motos
    motos: {
        width: 25,
        height: 24,
    },
    // Logo Bibicletas
    bicicletas: {
        width: 25,
        height: 24,
    },
})


export default SlotEstacionamiento;

