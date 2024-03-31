import { StyleSheet, Image, View } from "react-native";
import { React, useState, useEffect} from "react";
import SlotEstacionamiento from "./components/SlotEstacionamiento";
import letraEimportado from "../../../../assets/letra_e.png";
import docenciaimportado from "../../../../assets/docencia.png";
import { getSlots } from "../../../kernel/config/use_slot";

export default function Docencia5() {
  const [slots, setSlots] = useState([]);
  const letraE = letraEimportado;
  const docencia = docenciaimportado;
  
  useEffect(() => {
    getSlots('docencia5')
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
      <View style={styles.containerVertical}>
        <View style={styles.containerSlots}>
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
        </View>
        <View style={styles.containerImageDocencia}>
          <Image source={docencia} style={styles.imagenDocencia} />
        </View>
      </View>
      <View style={styles.containerHorizontal}>
        <View style={styles.containerImageEstacionamiento}>
          <Image source={letraE} style={styles.imagenEstacionamiento} />
        </View>
        <View style={styles.containerSlots2}>
        <SlotEstacionamiento
          estado={true}
          exclusividad={"SN"} 
          tipo={"moto"} 
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
            exclusividad={"exclusivo"}
            tipo={"carro"}
            orientacion={"horizontal"}
          />
        </View>
      </View>
      <View style={styles.containerVertical2}>
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
          exclusividad={"discapacidad"}
          tipo={"carro"}
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
  containerHorizontal: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerVertical: {
    flex: 1,
    flexDirection: "row",
  },
  containerVertical2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerSlots: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerSlots2: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerImageDocencia: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  containerImageEstacionamiento: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  imagenDocencia: {
    width: 80,
    height: 80,
    marginRight: "10%",
  },
  imagenEstacionamiento: {
    width: 80,
    height: 80,
  },
});
