import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import SlotEstacionamiento from './components/SlotEstacionamiento'

export default function Docencia4(props) {
  const { estado, exclusividad, tipo, orientacion} = props;
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/docencia.png')} style={styles.imagenDocencia} />
    <View style={styles.containerRight}>
    <Image source={require('../../../../assets/letra_e.png')} style={styles.imagenEstacionamiento}/>
      <SlotEstacionamiento estado={true} exclusividad={"exclusivo"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"exclusivo"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"exclusivo"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"exclusivo"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"moto"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"discapacidad"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
    </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#554E56',
    justifyContent: 'flex-start',
    flexDirection: 'row', // Ajuste para alinear horizontalmente los contenedores
    alignItems: 'flex-start' // Ajuste para alinear verticalmente los contenedores
  },

  containerLeft: {
    flex: 1,
    backgroundColor: "#554E56",
    justifyContent: "flex",
    padding: 25,
  },

  containerCenter: {
    flex: 1,
    backgroundColor: "#554E56",
    justifyContent: "flex-center",
    padding: 25,
  },

  containerRight:{
    marginTop:10,
    flex: 1,
    backgroundColor: "#554E56",
    justifyContent: "flex-end",
    padding: 25,
    marginLeft: 260,
    marginTop: 120
  },

  docencia: {
    width: 20,
    height: 20,
  },
  slot: {
    border: 10,
    borderColor: "#E5A800",
    borderRadius: 80,
  },
  imagenDocencia: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 30,
    left: 155
  },
  imagenEstacionamiento: {
    width: 110,
    height: 110,
    position: 'absolute',
    top: 200,
    right: 200
  },

});
