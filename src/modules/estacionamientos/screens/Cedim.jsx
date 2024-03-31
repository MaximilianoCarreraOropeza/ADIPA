import { StyleSheet, Image, View } from "react-native";
import { React, useState, useEffect} from "react";
import SlotEstacionamiento from "./components/SlotEstacionamiento";
import letraEimportado from "../../../../assets/letra_e.png";
import docenciaimportado from "../../../../assets/docencia.png";
import { getSlots } from "../../../kernel/config/use_connection";


export default function Cedim() {
  const [slots, setSlots] = useState([]);
  const letraE = letraEimportado;
  const docencia = docenciaimportado;
  
  useEffect(() => {
    getSlots('cedim')
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
        <View style={styles.containerHorizontal}>
          <View style={styles.containerImageEstacionamiento}>
            <Image source={letraE} style={styles.imagenEstacionamiento} />
          </View>
          <View style={styles.containerSlots}>
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
            <Image source={docencia} style={styles.imagenDocencia} />
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
              exclusividad={"exclusivo"}
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
        </View>
        {/**/}<View style={styles.containerVertical}>
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
            tipo={"moto"}
            orientacion={"vertical"}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#696969",
    flexDirection: "column",
  },
  containerVertical: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerHorizontal: {
    flex: 2,
    flexDirection: "row",
  },
  containerSlots: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImageEstacionamiento: {
    flex: 2,
    height: "100%",
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
