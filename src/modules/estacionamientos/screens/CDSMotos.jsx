import { StyleSheet, Image, View } from 'react-native'
import { React, useState, useEffect} from 'react'
import SlotEstacionamiento from './components/SlotEstacionamiento';
import letraEimportado from "../../../../assets/letra_e.png";
import docenciaimportado from "../../../../assets/docencia.png";
import { getSlots } from "../../../kernel/config/use_connection";


export default function CDSMotos() {
  const [slots, setSlots] = useState([]);
  const letraE = letraEimportado;
  const docencia = docenciaimportado;

  useEffect(() => {
    getSlots('motoscds')
      .then((response) => {
        if (response.status === "OK") {
          setSlots(response.data);
        } else {
          console.error("Error al obtener los espacios de estacionamieno1:", response);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los espacios de estacionamiento2:", error);
      });
  }, []); 
  
  useEffect(() => {
    console.log(slots);
  }, [slots]);

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