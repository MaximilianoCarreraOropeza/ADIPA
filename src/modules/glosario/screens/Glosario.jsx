import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width;

export default function Glosario() {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagenes} source={require('../../../../assets/libre.png')} resizeMode='contain' />
          <Text style={styles.textoImagen}>Libre</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagenes} source={require('../../../../assets/ocupado.png')} resizeMode='contain' />
          <Text style={styles.textoImagen}>Ocupado</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagenes} source={require('../../../../assets/restri.png')} resizeMode='contain' />
          <Text style={styles.textoImagen}>Restringido</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagenes} source={require('../../../../assets/exclusivo.png')} resizeMode='contain' />
          <Text style={styles.textoImagen}>Exclusivo</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagenes} source={require('../../../../assets/discapacitado.png')} resizeMode='contain' />
          <Text style={styles.textoImagen}>Discapacidad</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagenes} source={require('../../../../assets/docencia.png')} resizeMode='contain' />
          <Text style={styles.textoImagen}>Entrada a Docencia</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagenes} source={require('../../../../assets/motos.png')} resizeMode='contain' />
          <Text style={styles.textoImagen}>Área de Motos</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagenes} source={require('../../../../assets/bici.png')} resizeMode='contain' />
          <Text style={styles.textoImagen}>Área de Bicicletas</Text>
        </View>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    right: '16%'
  },
  imagenes:{
    flex: 1,
    height: windowWidth * 0.15, // Ajusta el tamaño de la imagen de acuerdo al ancho de la pantalla
    width: windowWidth * 0.15,
    margin: 10,
  },
  textoImagen:{
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    left: '15%'
  }
})