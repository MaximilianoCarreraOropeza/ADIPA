import { StyleSheet, Image, View, ScrollView } from "react-native";
import { React, useState, useEffect } from "react";
import SlotEstacionamiento from "./components/SlotEstacionamiento";
import letraEimportado from "../../../../assets/letra_e.png";
import calleImportado from "../../../../assets/Calle_DMotos.png";
import { getSlots } from "../../../kernel/config/use_connection";


export default function Docencia3Motos() {
  const [slots, setSlots] = useState([]);
  const letraE = letraEimportado;
  const calle = calleImportado;

  useEffect(() => {
    getSlots("motosdocencia3")
      .then((response) => {
        if (response.status === "OK") {
          setSlots(response.data);
        } else {
          console.error(
            "Error al obtener los espacios de estacionamieno1:",
            response
          );
        }
      })
      .catch((error) => {
        console.error(
          "Error al obtener los espacios de estacionamiento2:",
          error
        );
      });
  }, []);

  useEffect(() => {
    console.log(slots);
  }, [slots]);

  return (
    <ScrollView horizontal={true} style={{ backgroundColor: "#554E56" }}>
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
        </View>
        <View style={styles.containerLeftPlus}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
        </View>
        <View style={styles.containerLeftPlus2}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"vertical"}
          />
        </View>
        <View style={styles.containerCenter}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
        </View>
        <View style={styles.containerRight}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
        </View>
        <View style={styles.containerRightPlus}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
        </View>
        <View style={styles.containerRightPlus2}>
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
          <SlotEstacionamiento
            estado={true}
            exclusividad={"SN"}
            tipo={"motocicleta"}
            orientacion={"horizontal"}
          />
        </View>
        <Image style={styles.imagenEstacionamiento} source={letraE} />
        <Image style={styles.imagenCalle} source={calle} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#554E56",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  containerLeftPlus: {
    flexDirection: "row",
    marginTop: 25,
  },
  containerLeftPlus2: {
    flexDirection: "row",
    marginTop: 25,
    left: 60,
  },
  containerCenter: {
    padding: 25,
    marginTop: 140,
    right: 325,
  },
  containerRight: {
    padding: 25,
    marginTop: 140,
    right: 355,
  },
  containerRightPlus: {
    padding: 25,
    marginTop: 140,
    right: 220,
    bottom: 35,
  },
  containerRightPlus2: {
    padding: 25,
    right: 100,
  },
  containerLeft: {
    padding: 25,
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
    top: 300,
    right: 490,
  },
  imagenCalle: {
    height: 800,
    width: 145,
    position: "absolute",
    right: 210,
  },
});
