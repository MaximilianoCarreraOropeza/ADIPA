import { StyleSheet, View, Image} from 'react-native'
import React from 'react'
import SlotEstacionamiento from './components/SlotEstacionamientoD3'

export default function Docencia3(props) {
  const { estado, exclusividad, tipo, orientacion} = props;
  return (
    //Para que en la orientación vertical se vean uno al lado del otro y no uno sobre otro, se debe cambiar el flex direction a row
    <View style={styles.container}>
 
     <View style={styles.containerHorizontal2}>
     <View style={styles.espacio} ></View>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <View style={styles.espacio} ></View>
      <SlotEstacionamiento estado={true} exclusividad={"discapacidad"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
        </View>
 
 <View style={styles.containerD3}>
  
 <View style={styles.containerHorizontal}>
 <View style={styles.espacio} ></View>
 <View style={styles.espacio} ></View>

      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
        </View>
        <View style={styles.containerHorizontal2}>
        <Image source={require('../../../../assets/docencia.png')} style={styles.imagenDocencia} />
        <Image source={require('../../../../assets/letra_e.png')} style={styles.imagenDocencia} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
        </View>
        <View style={styles.containerHorizontal}>
        <View style={styles.espacio} ></View>
        <View style={styles.espacio} ></View>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
        </View>
        <View style={styles.containerHorizontal}>
        <View style={styles.espacio} ></View>
        <View style={styles.espacio} ></View>
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
      <SlotEstacionamiento estado={true} exclusividad={"SN"} tipo={"carro"} orientacion={"horizontal"} />
        </View>
  </View>
      
    </View> 
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#554E56',
    justifyContent: 'flex-start',
    flexDirection: 'row', // Ajuste para alinear horizontalmente los contenedores
    alignItems: 'flex-start' // Ajuste para alinear verticalmente los contenedores
  },
  containerD3: {
    flex: 1,
    backgroundColor: '#554E56',
    justifyContent: 'flex-start',
    flexDirection: 'row', // Ajuste para alinear horizontalmente los contenedores
    alignItems: 'flex-start' // Ajuste para alinear verticalmente los contenedores
  },
  docencia: {
    width: 20,
    height: 20,
  },
  slot: {
    borderWidth: 5, // Ajuste: cambia 'border' a 'borderWidth'
    borderColor: "#E5A800",
    borderRadius: 80
  },
  containerVertical: {
    backgroundColor: '#554E56',
    flexDirection: 'column', // Ajuste: cambia 'row' a 'column'
    justifyContent: 'flex-start',
    padding: 25
  },
  containerHorizontal: {
    backgroundColor: '#554E56',
    flexDirection: 'column', // Ajuste: cambia 'row' a 'column'
    justifyContent: 'flex-start',
    padding: 5,
    marginRight: 1,
  },
  containerHorizontal2: {
    backgroundColor: '#554E56',
    flexDirection: 'column', // Ajuste: cambia 'row' a 'column'
    justifyContent: 'flex-start',
    padding: 5,
    paddingRight: 20,
    marginRight: 5,
  },
  imagenDocencia: {
    width: 60,
    height: 60,
    marginBottom: 10,
    marginTop: 10
  },
  imagenEstacionamiento: {
    width: 100,
    height: 100
  },
  discapacitado: {
    width: 25,
    height: 24,
},
espacio:{
  width: 60,
  height: 80
}
});