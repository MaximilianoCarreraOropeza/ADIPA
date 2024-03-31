import { StyleSheet, Image, View } from "react-native";
import { React, useState, useEffect } from "react";
import SlotEstacionamiento from "./components/SlotEstacionamiento";
import letraEimportado from "../../../../assets/letra_e.png";
import { getSlots } from "../../../kernel/config/use_slot";

export default function Jardineras() {
  const imagenEstacionamiento = letraEimportado;
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    getSlots("jardineras")
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
    <View style={styles.container}>
      <View style={styles.containerVertical}>
        <View style={styles.containerVertical}>
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
        <View style={styles.containerVertical}>
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
      </View>
      <View style={styles.container2}>
        <View style={styles.containerVertical4}>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
          <View style={styles.containerCenter}>
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
          </View>
        </View>
        <View style={styles.containerVertical6}>
          <Image
            source={imagenEstacionamiento}
            style={styles.imagenEstacionamiento}
          />
        </View>
      </View>
      <View style={styles.containerVertical2}>
        <View style={styles.containerVertical3}>
          <View style={styles.containerTop}>
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
        </View>
        <View style={styles.containerVertical3_5}>
          <View style={styles.containerDown}>
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
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
              orientacion={"horizontal"}
            />
            <SlotEstacionamiento
              estado={true}
              exclusividad={"res"}
              tipo={"motocicleta"}
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
    flexDirection: "row",
  },
  container2: {
    flex: 1,
    flexDirection: "row",
  },
  containerVertical: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerVertical2: {
    flex: 1,
  },
  containerVertical3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerVertical3_5: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerVertical4: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerVertical5: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  containerVertical6: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  containerTop: {
    transform: [{ rotate: "-5deg" }],
  },
  containerDown: {
    transform: [{ rotate: "5deg" }],
  },
  containerCenter: {
    transform: [{ rotate: "20deg" }],
  },
  imagenEstacionamiento: {
    width: 80,
    height: 80,
  },
});
