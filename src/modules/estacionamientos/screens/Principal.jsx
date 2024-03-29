import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { useState} from "react";
import PingPoint from "./components/PingPoint";
import { BackgroundImage } from "@rneui/base";
import ConoceCampus from "../../../../assets/ConoceCampus.png";
import mapaPin from "../../../../assets/mapaPin.png";
import Codec from "../../../kernel/components/Codec";
import { Audio } from "expo-av";

export default function Principal(props) {
  const { navigation } = props;
  const image1 = ConoceCampus;
  const image2 = mapaPin;
  const [isModalVisible, setModalVisible] = useState(false);

  /*const playSound = async (sound) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync();
      await soundObject.setPositionAsync(0);
      await soundObject.playAsync();
      /*if (soundObject._loaded) {
        
        await soundObject.playAsync(sound);
      } else {
        
      }
    } catch (error) {
      console.log(error);
    }
  };
      */

  const handlerPress = (screen) => {
    navigation.navigate(screen);
  };

  const toggleOverlay = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <BackgroundImage source={image2} style={styles.mapa}>
          <View style={styles.pin}>
            <PingPoint
              onPress={handlerPress}
              direccion={"Docencia5"}
              tipo={"carro"}
              exclusividad={"libre"}
             // playSound={()=>playSound(require("../../../../assets/prueba.mp3"))}
            />
          </View>
          <View style={styles.pin2}>
            <PingPoint
              onPress={handlerPress}
              direccion={"Cedim"}
              tipo={"carro"}
              exclusividad={"res"}
            />
          </View>
          <View style={styles.pin3}>
            <PingPoint
              onPress={handlerPress}
              direccion={"Docencia4"}
              tipo={"carro"}
              exclusividad={"ocupado"}
            />
          </View>
          <View style={styles.pin4}>
            <PingPoint
              onPress={handlerPress}
              direccion={"Docencia3"}
              tipo={"carro"}
              exclusividad={"ocupado"}
            />
          </View>
          <View style={styles.pin5}>
            <PingPoint
              onPress={handlerPress}
              direccion={"Docencia3Motos"}
              tipo={"moto"}
              exclusividad={"SN"}
            />
          </View>
          <View style={styles.pin6}>
            <PingPoint
              onPress={handlerPress}
              direccion={"Jardineras"}
              tipo={"carro"}
              exclusividad={"res"}
            />
          </View>
          <View style={styles.pin7}>
            <PingPoint
              onPress={handlerPress}
              direccion={"CafeBalcon"}
              tipo={"carro"}
              exclusividad={"libre"}
            />
          </View>
          <View style={styles.pin8}>
            <PingPoint
              onPress={handlerPress}
              direccion={"Docencia1"}
              tipo={"carro"}
              exclusividad={"exclusivo"}
            />
          </View>
          <View style={styles.pin9}>
            <PingPoint
              onPress={handlerPress}
              direccion={"CDS"}
              tipo={"carro"}
              exclusividad={"exclusivo"}
            />
          </View>
          <View style={styles.pin10}>
            <PingPoint
              onPress={handlerPress}
              direccion={"TallerPesado2"}
              tipo={"carro"}
              exclusividad={"res"}
            />
          </View>
          <View style={styles.pin11}>
            <PingPoint
              onPress={handlerPress}
              direccion={"CDSMotos"}
              tipo={"moto"}
              exclusividad={"SN"}
            />
          </View>
        </BackgroundImage>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity onPress={toggleOverlay} style={styles.conoces}>
          <Image source={image1} style={styles.TouchableOpacity} />
        </TouchableOpacity>
      </View>
      <Codec visible={isModalVisible} setVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 3,
    justifyContent: "center",
  },
  container3: {
    flex: 1,
    justifyContent: "center",
  },
  TouchableOpacity: {
    height: "50%",
    width: "90%",
    resizeMode: "contain",
  },
  conoces: {
    flex: 1,
    justifyContent: "center",
  },
  mapa: {
    width: "100%",
    height: "100%",
  },
  btnCerrar: {
    position: "absolute",
  },
  pin: {
    position: "absolute",
    top: "11%",
    left: "43%",
  },
  pin2: {
    position: "absolute",
    top: "5%",
    left: "50%",
  },
  pin3: {
    position: "absolute",
    top: "5%",
    left: "75%",
  },
  pin4: {
    position: "absolute",
    top: "17%",
    left: "65%",
  },
  pin5: {
    position: "absolute",
    top: "20%",
    left: "75%",
  },
  pin6: {
    position: "absolute",
    top: "30%",
    left: "78%",
  },
  pin7: {
    position: "absolute",
    top: "32%",
    left: "70%",
  },
  pin8: {
    position: "absolute",
    top: "27%",
    left: "50%",
  },
  pin9: {
    position: "absolute",
    top: "42%",
    left: "37%",
  },
  pin10: {
    position: "absolute",
    top: "44%",
    left: "60%",
  },
  pin11: {
    position: "absolute",
    top: "53%",
    left: "54%",
  },
});
