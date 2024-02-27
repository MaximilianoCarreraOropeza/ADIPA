import { StyleSheet, View, Image } from "react-native";
import React from "react";
import SlotEstacionamiento from "../screens/components/SlotEstacionamiento";

export default function Docencia4(props) {
  const { estado, exclusividad, tipo, orientacion} = props;
  return (
    <View style={styles.container}>
    <View style={styles.containerLeft}>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"exclusivo"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"discapacidad"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <Image source={require('../../../../assets/letra_e.png')} style={styles.imagenEstacionamiento}/>
      <Image source={require('../../../../assets/docencia.png')} style={styles.imagenDocencia} />
    </View>      
    <View style={styles.containerRight}>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"moto"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
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
    justifyContent: "flex-start",
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
    marginLeft: 130,
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
    width: 100,
    height: 100,
    marginLeft: 0,
    marginTop: 15,
  },
  imagenEstacionamiento: {
    width: 110,
    height: 110,
    position: 'absolute',
    top: 240,
    left: 150
  },

});