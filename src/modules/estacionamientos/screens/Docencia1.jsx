import { StyleSheet, Image, View } from "react-native";
import React from "react";
import SlotEstacionamiento from "./components/SlotEstacionamiento";
import letraEimportado from "../../../../assets/letra_e.png";
import docenciaimportado from "../../../../assets/docencia.png";

export default function Docencia1() {
  const letraE = letraEimportado;
  const docencia = docenciaimportado;
  return (
    <View style={styles.container}>
      <View style={styles.containerImagenDocencia}>
        <Image source={docencia} style={styles.imagenDocencia} />
      </View>
      <View style={styles.containerHorizontal}>
        <View style={styles.containerImagenEstacionamiento}>
          <Image source={letraE} style={styles.imagenEstacionamiento} />
        </View>
        <View style={styles.containerSlots}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"bicicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
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
            exclusividad={"SN"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#696969",
  },
  containerImagenDocencia: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerHorizontal: {
    flex: 4,
    flexDirection: "row",
  },
  containerImagenEstacionamiento: {
    flex: 3,
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerSlots: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagenDocencia: {
    width: 80,
    height: 80,
  },
  imagenEstacionamiento: {
    width: 120,
    height: 120,
  },
});
