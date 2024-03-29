import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image } from "@rneui/themed";
import usuario from "../../../../assets/usuario.png";
import cambiar from "../../../../assets/contra.png";
import cerrar from "../../../../assets/salida.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../../kernel/components/Loading";
import Message from "../../../kernel/components/Message";

export default function Perfil(props) {
  const { setIsAuthenticated, route } = props;
  console.log(route);
  const navigation = useNavigation();
  const fotoPerfil = usuario;
  const contra = cambiar;
  const salida = cerrar;
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [ask, setAsk] = useState(false);
  const [success, setSuccess] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState('');
  const [session, setSession] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [lastname, setLastname] = useState("");
  const [matricula, setMatricula] = useState("");
  const [role, setRole] = useState("");

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("session");
      if (value !== null) {
        const sessionData = JSON.parse(value);
        console.log(sessionData);
        setSession(sessionData);
        setId(sessionData.id);
        setName(sessionData.name);
        setSurname(sessionData.surname);
        setLastname(sessionData.lastname);
        setMatricula(sessionData.matricula);
        setRole(sessionData.role);
      }
    } catch (e) {
      setError(!error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const confirmAction = async () => {
    setAsk(!ask);
  };

  if (confirm) {
    const sessionClose = async () => {
      try {
        await AsyncStorage.removeItem("session").then(() => {
          setConfirm(false);
          setAsk(false);
          setVisible(true);
        });
        setTimeout(() => {
          setVisible(false);
          setSuccess(true);
        }, 2000);
        setTimeout(() => {
          setSuccess(false);
          setIsAuthenticated(false);
        }, 4000);
      } catch (e) {
        setError(!error);
      }
    };
    sessionClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.foto}>
          <Image source={fotoPerfil} style={styles.img} />
          <Text style={styles.estudiante}>{role}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.nombre}>{name}</Text>
          <Text style={styles.nombre}>
            {surname} {lastname}
          </Text>
          <Text style={styles.nombre}>{matricula}</Text>
        </View>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("CambiarContra", session);
          }}
        >
          <Image source={contra} style={styles.icono} />
          <Text style={styles.texto}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={confirmAction}>
          <Image source={salida} style={styles.icono} />
          <Text style={[styles.texto, { color: "black" }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
      <Loading visible={visible} title="Cerrando Sesión" />
      <Message
        type={"ask"}
        visible={ask}
        setVisible={setAsk}
        confirm={confirm}
        setConfirm={setConfirm}
        title="¿Esta seguro de querer cerrar sesión?"
      />
      <Message
        type={"error"}
        visible={error}
        setVisible={setError}
        title="No se realizo el proceso"
      />
      <Message
        type={"success"}
        visible={success}
        setVisible={setSuccess}
        title="Se cerro sesion correctamente"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: "10%",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
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
    alignItems: "center",
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
    alignItems: "center",
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
    borderColor: "#002E60",
    borderWidth: 2,
    borderRadius: 20,
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
