import { StyleSheet, View, ScrollView, Image } from "react-native";
import React from "react";
import SlotEstacionamiento from "./components/SlotEstacionamiento";

export default function CDS() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
        </View>
        <View style={styles.containerArriba}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
        </View>
        <View style={styles.disposicionElemento}>
          <Image
            source={require("../../../../assets/letra_e.png")}
            style={styles.imagenEstacionamiento}
          />
        </View>
        <View style={styles.containerEnd}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad-exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad-exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad-exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad-exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad-exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"discapacidad"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
        </View>
        <View style={styles.containerArribaMenos}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"moto"}
            orientacion={"vertical"}
          />
        </View>
        <View style={styles.disposicionImagen}>
          <Image
            source={require("../../../../assets/docencia.png")}
            style={styles.imagenDocencia}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#554E56",
    justifyContent: "flex-start",
    flexDirection: "row", 
    alignItems: "flex-start" 
  },
  containerLeft: {
    padding: 25,
    marginTop: 250
  },
  containerArriba: {
    flexDirection: "row",
    marginTop: 50
  },
  containerArribaMenos: {
    flexDirection: "row",
    marginTop: 130,
    marginRight: 30
  },
  containerEnd: {
    position: "absolute",
    bottom: 180,
    left: 150,
    flexDirection: "row"
  },

  disposicionImagen: {
    position: "absolute",
    bottom: 20,
    left: 300,
    flexDirection: "row"
  },
  disposicionElemento: {
    top: "1%",
    left: 300,
    flexDirection: "row"
  },
  docencia: {
    width: 20,
    height: 20,
  },
  imagenDocencia: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginBottom: 15,
  },
  imagenEstacionamiento: {
    width: 110,
    height: 110,
    position: "absolute",
    top: 250,
    right: 165
  }
});
