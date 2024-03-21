import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "@rneui/themed";
import usuario from "../../../../assets/usuario.png";
import cambiar from "../../../../assets/contra.png";
import cerrar from "../../../../assets/salida.png";

export default function Perfil(props) {
  const { navigation } = props;
  const fotoPerfil = usuario;
  const contra = cambiar;
  const salida = cerrar;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.foto}>
          <Image
            source={fotoPerfil}
            style={styles.img}
          />
          <Text style={styles.estudiante}>Estudiante</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.nombre}>Diego Eduardo</Text>
          <Text style={styles.nombre}>Jaimez Flores</Text>
          <Text style={styles.nombre}>20223tn021</Text>
        </View>
      </View>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <View style={styles.btn1Container}>
            <Image
              source={contra}
              style={styles.cambiarFoto}
            />
          </View>
          <TouchableOpacity style={styles.btn2Container} onPress={()=>{navigation.navigate("CambiarContra")}}>
              <Text style={styles.texto}>Cambiar Contraseña</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <View style={styles.btn3Container}>
            <Image
              source={salida}
              style={styles.cambiarFoto}
            />
          </View>
          <TouchableOpacity style={styles.btn4Container}>
              <Text style={styles.texto}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  img: {
    width: 150,
    height: 150,
  },
  foto: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  btns: {
    flex: 2,
    width: "100%",
    height: "100%",
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btn1Container: {
    flex: 1,
    backgroundColor: "#ffff",
    height: "40%",
    justifyContent: "center",
    alignItems: "center"
  },
  btn2Container: {
    flex: 3,
    backgroundColor: "#002E60",
    height: "40%",
    justifyContent: "center",
    alignItems: "center"
  },
  btn3Container: {
    flex: 1,
    backgroundColor: "#ffff",
    height: "40%",
    justifyContent: "center",
    alignItems: "center"
  },
  btn4Container: {
    flex: 3,
    backgroundColor: "#DB3328",
    height: "40%",
    justifyContent: "center",
    alignItems: "center"
  },
  estudiante: {
    fontSize: 20,
    fontWeight: "bold",
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cambiarFoto: {
    width: 60,
    height: 60
  },
  texto: {
    fontSize: 21,
    color: "white",
  }
});
