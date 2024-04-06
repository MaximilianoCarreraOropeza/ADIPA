import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import libre from "../../../../assets/libre.png";
import ocupado from "../../../../assets/ocupado.png";
import restri from "../../../../assets/restri.png";
import exclusivo from "../../../../assets/exclusivo.png";
import discapacitado from "../../../../assets/discapacitado.png";
import docencia from "../../../../assets/docencia.png";
import areaMotos from "../../../../assets/motos.png";
import bici from "../../../../assets/bici.png";

export default function Glosario() {
  const libreIma = libre;
  const ocupadoIma = ocupado;
  const restriIma = restri;
  const exclusivoIma = exclusivo;
  const discapacitadoIma = discapacitado;
  const docenciaIma = docencia;
  const areaMotosIma = areaMotos;
  const biciIma = bici;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={libreIma} style={styles.imagen} />
        <Text style={styles.texto}>Libre</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image source={ocupadoIma} style={styles.imagen} />
        <Text style={styles.texto}>Ocupado</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image source={restriIma} style={styles.imagen} />
        <Text style={styles.texto}>Restringido</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image source={exclusivoIma} style={styles.imagen} />
        <Text style={styles.texto}>Exclusivo</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image source={discapacitadoIma} style={styles.imagen} />
        <Text style={styles.texto}>Discapacidad</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image source={docenciaIma} style={styles.imagen} />
        <Text style={styles.texto}>Entrada a Docencia</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image source={areaMotosIma} style={styles.imagen} />
        <Text style={styles.texto}>Área de Motos</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image source={biciIma} style={styles.imagen} />
        <Text style={styles.texto}>Área de Bicicletas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  imagen: {
    width: 45,
    height: 45,
    margin: 10,
  },
  texto: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginLeft: 10
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 10,
    marginVertical: "2%",
    marginHorizontal: "2%"
  },
  lastItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
});
