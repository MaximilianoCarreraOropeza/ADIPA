import { StyleSheet, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import SlotEstacionamiento from "./components/SlotEstacionamiento";
import letraEimportado from "../../../../assets/letra_e.png";
import axios from "axios";

const API_URL = "http://192.168.109.67:8080/adipa/estacionamiento"; //Quien lo use, cambiar la IP por la suya

export default function CafeBalcon() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000); // Llama a fetchData cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      const info = response.data;
      setData(info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };   

  const letraE = letraEimportado;
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
            orientacion={"horizontal"}/>
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
        <Image
          source={letraE}
          style={styles.imagenEstacionamiento}
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
    flexDirection: "row"
  },
  containerHorizontal: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  containerHorizontal2: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  containerHorizontal3: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  imagenEstacionamiento: {
    width: 80,
    height: 80,
    marginBottom: 30
  }
});
