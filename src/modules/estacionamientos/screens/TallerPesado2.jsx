import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import SlotEstacionamiento from './components/SlotEstacionamiento'
import letraEimportado from "../../../../assets/letra_e.png";
import docenciaimportado from "../../../../assets/docencia.png";



export default function TallerPesado2() {
  const letraE = letraEimportado;
  const docencia = docenciaimportado;
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <SlotEstacionamiento estado={true} exclusividad={"res"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"res"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
      </View>
      <View style={styles.containerCenter}>
        <Image source={letraE} style={styles.imagenEstacionamiento}/>
      </View>
      <View style={styles.containerRight}>
        <Image source={docencia} style={styles.imagenDocencia}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"res"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"exclusivo"} tipo={"carro"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"exclusivo"} tipo={"carro"} orientacion={"horizontal"}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    flexDirection: 'row', 
  },

  containerLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  containerRight:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imagenDocencia: {
    width: 90,
    height: 90,
    marginBottom: "5%"
  },
  imagenEstacionamiento: {
    width: 80,
    height: 80
  },
})