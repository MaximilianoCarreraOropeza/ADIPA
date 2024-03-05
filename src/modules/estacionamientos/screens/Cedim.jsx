import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import SlotEstacionamiento from './components/SlotEstacionamientoD3'

export default function Cedim(props) {
  const { estado, exclusividad, tipo, orientacion} = props;
  return (
    //Para que en la orientación vertical se vean uno al lado del otro y no uno sobre otro, se debe cambiar el flex direction a row
    <View style={styles.container}>
     
      <View style={styles.containerHorizontal}>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <Image source={require('../../../../assets/docencia.png')} style={styles.imagenDocencia} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"exclusivo"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"discapacidad"} tipo={"carro"} orientacion={"horizontal"} />
        </View>
        <View style={styles.containerVertical2}>
        <Image source={require('../../../../assets/letra_e.png')} style={styles.imagenEstacionamiento} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"vertical"} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"vertical"} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"vertical"} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"vertical"} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"vertical"} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"vertical"} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"vertical"} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"vertical"} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"vertical"} />
        <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"moto"} orientacion={"vertical"} />
        </View>
    </View> 
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#554E56',
    justifyContent: 'flex-start',
    padding: 25
  },
  docencia: {
    width: 20,
    height: 20,
  },
  slot: {
    border: 10,
    borderColor: "#E5A800",
    borderRadius: 80
  },
  containerVertical: {
    backgroundColor: '#554E56',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 25
  },
  containerHorizontal: {
    backgroundColor: '#554E56',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 25,
    marginLeft: 240,
    marginTop: 50,

  },
  containerVertical2: {
    backgroundColor: '#554E56',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginRight: 200,
  },
  imagenDocencia: {
    width: 60,
    height: 60,
    marginBottom: 10,
    marginTop: 10
  },
  imagenEstacionamiento: {
    position: 'absolute',
    bottom: 230,
    left: 60,
    width: 120,
    height: 120,
  }
})
