import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "@rneui/base";
import Loading from "../../../kernel/components/Loading";
import Message from "../../../kernel/components/Message";
import { isEmpty } from "lodash";
import {postApi, getUserByMatricula} from "../../../kernel/config/use_connection";

export default function RecuperaCuenta(props) {
  const { navigation } = props;
  const [showMessage, setShowMessage] = useState({ matricula: "" });
  const [matricula, setMatricula] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  var tempCorreo = "";

  const enviarCorreo = async () => {
    if (!isEmpty(matricula)) {
      setVisible(!visible);
      setShowMessage({ matricula: "" });
      getUserByMatricula(matricula)
      .then(
        (response) => {
            if(response.status === "OK"){
              console.log(response.data[0]);
            const id_usuario = response.data[0].id_usuario;
              const matricula = response.data[0].matricula;
              const role = response.data[0].tipoUsuario.nombre;
              console.log(id_usuario);
              console.log(matricula);
              console.log(role);
              if(role === "Estudiante"){
                console.log(`El usuario es estudiante`);
                tempCorreo = `${matricula}@utez.edu.mx`;
              } else {
                console.log(`El usuario es empleado`);
                const nombre = response.data[0].persona.nombre1;
                const apellido = response.data[0].persona.apellido_p;
               tempCorreo = `${nombre}${apellido}@gmail.com`;
              }
              console.log(`SetCorreo ${tempCorreo}`);
              const asunto = "Recuperación de Cuenta - ADIPA";
              postApi("send-email", {
                destinatario: tempCorreo, 
                asunto: asunto
              }).then(
                (response) => {
                  console.log(` el estado es: ${response.status}`);
                  if(response.status === "OK"){
                    const pin = response.data.pin;
                    setTimeout(() => {
                      setVisible(false);
                      setSuccess(!success);
                    }, 1000);
                    setTimeout(() => {
                      setSuccess(false);
                      navigation.navigate("ValideToken", {id: id_usuario, pin: pin});
                    }, 3000);
                  }else{
                    setTimeout(() => {
                      setVisible(false);
                      setWarning(!warning);
                    }, 1000);
                  }
                }
              )//fin then postApi
            } else {
              setTimeout(() => {
                setVisible(false);
                setError(!error);
              }, 1000);
            }//fin del response.status === OK
        }//fin arrowFunction de response
      )
    } else {
      setShowMessage({ matricula: "Campo obligatorio" });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.label}>Usuario: </Text>
        <Input
        value={matricula}
          placeholder="Ingresa tu matricula"
          keyboardType="email-address"
          containerStyle={styles.inputMatricula}
          inputContainerStyle={styles.textInput}
          inputStyle={styles.fontSize}
          placeholderTextColor={"#70BEAE"}
          errorMessage={showMessage.matricula}
          onChange={({ nativeEvent: { text } }) => setMatricula(text)}
          leftIcon={<Icon type="material-community" name="account" />}
        />
        <Text style={styles.txtAviso}>
          Se enviará un enlace para reestablecer su contraseña al correo
          asociado a su cuenta.
          El usuario puede ser una matricula para los estudiantes, 
          número de empleado para los docentes o administrativos, 
          o correo electronico para usuarios externos
        </Text>
        <Button
          title="Continuar"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
          onPress={enviarCorreo}
        />
        <Button
          title="Cancelar"
          type="clear"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle2}
          titleStyle={styles.titleStyle2}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Loading visible={visible} title="Realizando Proceso" />
      <Message
        type={"error"}
        visible={error}
        setVisible={setError}
        title="Usuario no encontrada"
      />
      <Message
        type={"warning"}
        visible={warning}
        setVisible={setWarning}
        title="Error enviando correo de recuperación"
      />
      <Message
        type={"success"}
        visible={success}
        setVisible={setSuccess}
        title="Se envio correo de recuperación correctamente"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  container2: {
    width: "90%",
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 15,
    color: "#0655AA",
    alignSelf: "flex-start",
  },
  inputMatricula: {
    width: "95%",
    height: 50,
    alignSelf: "center",
    marginBottom: 24,
    marginTop: 8,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#009475",
  },
  textInput: {
    borderBottomWidth: 0,
  },
  txtAviso: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
    marginHorizontal: 12,
  },
  btnStyle: {
    backgroundColor: "#002E60",
    borderRadius: 50,
  },
  btnContainer: {
    width: "90%",
    paddingTop: 25,
    alignSelf: "center",
  },
  btnStyle2: {
    borderWidth: 1.5,
    borderColor: "#002E60",
    borderRadius: 50,
  },
  titleStyle: {
    color: "#fff",
  },
  titleStyle2: {
    color: "#002E60",
  },
  fontSize: {
    fontSize: 16,
  },
});
