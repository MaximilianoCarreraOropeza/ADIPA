import { StyleSheet, View, Image } from "react-native";
import { React, useState, useEffect} from "react";
import SlotEstacionamiento from "./components/SlotEstacionamientoD3";
import letraEimportado from "../../../../assets/letra_e.png";
import docenciaimportado from "../../../../assets/docencia.png";
import { getSlots } from "../../../kernel/config/use_connection";

export default function Docencia3() {
  const [slots, setSlots] = useState([]);
  const letraE = letraEimportado;
  const docencia = docenciaimportado;
  
  useEffect(() => {
    getSlots('docencia3')
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
      <View style={styles.container2}>
        <View style={styles.containerMiniSlots}>
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
        <View style={styles.containerImages}>
          <Image source={docencia} style={styles.imagenDocencia} />
          <Image source={letraE} style={styles.imagenDocencia} />
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.containerSlots}>
          <View style={styles.containerVertical1}>
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
        <View style={styles.containerSlots2}>
          <View style={styles.containerVertical2}>
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
              exclusividad={"SN"}
              tipo={"carro"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerVertical3}>
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
          </View>
        </View>
        <View style={styles.containerSlots3}>
          <View style={styles.containerVertical4}>
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
          </View>
          <View style={styles.containerVertical5}>
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
          </View>
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
  container2: {
    flex: 1,
    flexDirection: "row",
  },
  container3: {
    flex: 4,
    flexDirection: "row",
  },
  containerMiniSlots: {
    flex: 1,
    height: "150%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerImages: {
    flex: 4,
    height: "150%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerVertical1: {
    flex: 1,
    height: "90%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerVertical2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerVertical3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerVertical4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerVertical5: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerSlots: {
    flex: 1,
    flexDirection: "row",
  },
  containerSlots2: {
    flex: 2,
    flexDirection: "row",
  },
  containerSlots3: {
    flex: 2,
    flexDirection: "row",
  },
  imagenDocencia: {
    width: 90,
    height: 90,
  },
  imagenEstacionamiento: {
    width: 90,
    height: 90,
  },
});
