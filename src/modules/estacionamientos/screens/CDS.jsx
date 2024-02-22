import { StyleSheet, View } from "react-native";
import React from "react";
import SlotEstacionamiento from "./components/SlotEstacionamiento";

export default function CDS() {
  return (
    <View style={styles.container}>
      <SlotEstacionamiento
        estado={true}
        exclusividad={"discapacidad-exclusivo"}
        tipo={"carro"}
        orientacion={"horizontal"}
      />
      <SlotEstacionamiento
        estado={true}
        exclusividad={"res"}
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
        estado={false}
        exclusividad={"discapacidad"}
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
        estado={false}
        exclusividad={"exclusivo"}
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
        estado={false}
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
        estado={false}
        exclusividad={"SN"}
        tipo={"carro"}
        orientacion={"horizontal"}
      />
      <SlotEstacionamiento
        estado={false}
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
        estado={false}
        exclusividad={"SN"}
        tipo={"moto"}
        orientacion={"horizontal"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#554E56",
    justifyContent: "flex-start",
    padding: 25,
  },
  docencia: {
    width: 20,
    height: 20,
  },
  slot: {
    border: 10,
    borderColor: "#E5A800",
    borderRadius: 80,
  },
});
