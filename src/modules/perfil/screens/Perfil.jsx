import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "@rneui/themed";
import usuario from "../../../../assets/usuario.png";
import cambiar from "../../../../assets/contra.png";
import cerrar from "../../../../assets/salida.png";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil(props) {

  handleRemoveItem = async () => {
    try {
      await AsyncStorage.removeItem('token');
      Alert.alert('Elemento eliminado exitosamente');
    } catch (error) {
      console.log(error);
      Alert.alert('Error al eliminar el elemento');
    }
  }
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
        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("CambiarContra")}}>
          <Image
            source={contra}
            style={styles.icono}
          />
          <Text style={styles.texto}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleRemoveItem}>
          <Image
            source={salida}
            style={styles.icono}
          />
          <Text style={[styles.texto, { color: "black" }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: "10%",
    alignItems: "center",
    backgroundColor: "#F0F0F0"
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: "90%",
    alignItems: "center",
  },
  foto: {
    marginRight: 20,
    alignItems: "center"
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  estudiante: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  column: {
    flex: 1,
    alignItems: "center"
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  btns: {
    width: "90%",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#002E60", // Color del borde
    borderWidth: 2, // Ancho del borde
    borderRadius: 20, // Más redondeado
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  icono: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  texto: {
    fontSize: 18,
    color: "black",
  },
});
