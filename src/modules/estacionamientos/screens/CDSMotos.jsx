import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import SlotEstacionamiento from './components/SlotEstacionamiento';
import letraEimportado from "../../../../assets/letra_e.png";
import docenciaimportado from "../../../../assets/docencia.png";

export default function CDSMotos() {
  const letraE = letraEimportado;
  const docencia = docenciaimportado;
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <Image source={docencia} style={styles.imagenDocencia} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"motocicleta"} orientacion={"horizontal"}/>
      </View> 
      <View style={styles.containerRight}>
        <Image source={letraE} style={styles.imagenEstacionamiento}/>
      </View>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    flexDirection: 'row'
  },

  containerLeft: {
    flex: 1,    
    justifyContent: "center",
    alignItems: "center"
  },
  
  containerRight:{
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  imagenDocencia: {
    width: 80,
    height: 80,
    marginBottom: "5%",
    marginTop: "5%"
  },
  imagenEstacionamiento: {
    width: 110,
    height: 110
  },
})