import { StyleSheet, View, Image, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import PingPoint from "../../estacionamientos/screens/components/PingPoint";
import { BackgroundImage } from "@rneui/base";
import ConoceCampus from "../../../../assets/ConoceCampus.png";
import mapaPin from "../../../../assets/mapaPin.png";
import Codec from "../../../kernel/components/Codec";

export default function Discapacitado(props) {
  const {navigation} = props
  const image1 = ConoceCampus;
  const image2 = mapaPin;
  const [isModalVisible, setModalVisible] = useState(false);

  const handlerPress = (screen) => {
    navigation.navigate(screen)
  }

  const toggleOverlay = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <BackgroundImage source={image2} style={styles.mapa}>
          <View style={styles.pin}>
            <PingPoint onPress={handlerPress} direccion={'Docencia5Dis'} tipo={'carro'} exclusividad={'discapacidad'}/>
          </View>
          <View style={styles.pin2}>
            <PingPoint onPress={handlerPress} direccion={'CedimDis'} tipo={'carro'} exclusividad={'discapacidad'}/>
          </View>
          <View style={styles.pin3}>
            <PingPoint onPress={handlerPress} direccion={'Docencia4Dis'} tipo={'carro'} exclusividad={'discapacidad'}/>
          </View>
          <View style={styles.pin4}>
            <PingPoint onPress={handlerPress} direccion={'Docencia3Dis'} tipo={'carro'} exclusividad={'discapacidad'}/>
          </View>
          <View style={styles.pin7}>
            <PingPoint onPress={handlerPress} direccion={'CafeBalconDis'} tipo={'carro'} exclusividad={'discapacidad'}/>
          </View>
          <View style={styles.pin8}>
            <PingPoint onPress={handlerPress} direccion={'Docencia1Dis'} tipo={'carro'} exclusividad={'discapacidad'}/>
          </View>
          <View style={styles.pin9}>
            <PingPoint onPress={handlerPress} direccion={'CDSDis'} tipo={'carro'} exclusividad={'discapacidad'}/>
          </View>
        </BackgroundImage>
      </View>
      <View style={styles.container3}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.conoces}>
          <Image source={image1} style={styles.TouchableOpacity}/>
      </TouchableOpacity>
      </View>
      <Codec visible={isModalVisible} setVisible={setModalVisible} />
    </View>
  )
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
    resizeMode: "contain"
  },
  conoces: {
    flex: 1,
    justifyContent: "center"
  },
  mapa: {
    flex: 1,
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
  }
});