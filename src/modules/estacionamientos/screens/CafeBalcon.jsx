import { StyleSheet, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import SlotEstacionamiento from "./components/SlotEstacionamiento";
import letraEimportado from "../../../../assets/letra_e.png";
import { getSlots } from "../../../kernel/config/use_connection";

export default function CafeBalcon() {
  const [slots, setSlots] = useState([]);
  const letraE = letraEimportado;
  
  useEffect(() => {
    getSlots("cafebalcon")
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
      <View style={styles.containerHorizontal}>
        {/*
            {
        data.length > 0 && (
          <SlotEstacionamiento
            estado={data[0].status}
            exclusividad={"SN"}
            tipo={"carro"}
            orientacion={"horizontal"}/>
        )
        }
        {
        data.length > 0 && (
        <SlotEstacionamiento
          estado={data[1].status}
          exclusividad={"discapacidad"}
          tipo={"carro"}
          orientacion={"horizontal"}
        />)
        }
        {
        data.length > 0 && (
        <SlotEstacionamiento
          estado={data[2].status}
          exclusividad={"discapacidad-exclusivo"}
          tipo={"carro"}
          orientacion={"horizontal"}
        />
        )
        }
        {
        data.length > 0 && (
        <SlotEstacionamiento
          estado={data[3].status}
          exclusividad={"discapacidad-exclusivo"}
          tipo={"carro"}
          orientacion={"horizontal"}
        />
        )
        }
        
        {
        data.length > 0 && (
        <SlotEstacionamiento
          estado={data[4].status}
          exclusividad={"SN"}
          tipo={"carro"}
          orientacion={"horizontal"}
        />
        )
        }
        {
        data.length > 0 && (//A modificar
        <SlotEstacionamiento
          estado={data[1].status}
          exclusividad={"SN"}
          tipo={"carro"}
          orientacion={"horizontal"}
        />          
        )
        }
        */}
        <SlotEstacionamiento
          estado={true}
          exclusividad={"SN"}
          tipo={"carro"}
          orientacion={"horizontal"}
        />
        <SlotEstacionamiento
          estado={true}
          exclusividad={"discapacidad-exclusivo"}
          tipo={"carro"}
          orientacion={"horizontal"}
        />
        <SlotEstacionamiento
          estado={true}
          exclusividad={"discapacidad-exclusivo"}
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
      <View style={styles.containerHorizontal2}>
        <Image source={letraE} style={styles.imagenEstacionamiento} />
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
      <View style={styles.containerHorizontal3}>
        <View style={styles.espacio}></View>
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
  containerHorizontal: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerHorizontal2: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerHorizontal3: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagenEstacionamiento: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
});
