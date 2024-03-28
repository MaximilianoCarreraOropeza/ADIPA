import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Input, Icon, Button } from "@rneui/base";
import Loading from "../../../kernel/components/Loading";
import Message from "../../../kernel/components/Message";
import { isEmpty } from "lodash";
import axios from 'axios';


export default function CambiarContra(props) {
  const { navigation, route } = props;
  const [showMessage, setShowMessage] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [showPassword3, setShowPassword3] = useState(true);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [session, setSession] = useState([]);

  useEffect(() => {
    setSession(route.params);
    setIdUser(session.id);
  });

  const API_URL = "http://192.168.0.10:8080/adipa/usuario/" + idUser;

  const changePassword = async () => {
    try {
      const response = await axios.patch(API_URL, {
        contrasena: confirmPassword,
      })
      console.log(response.data);
    } catch (error) {
        setError(!error);
    }
  }

  const CambiarContraseña = async () => {
    if (
      !isEmpty(password) &&
      !isEmpty(newPassword) &&
      !isEmpty(confirmPassword)
    ) {
      setVisible(!visible)
      setShowMessage({ password: "", newPassword: "", confirmPassword: "" });
      changePassword();
      setTimeout(() => {
        setVisible(false);
        setSuccess(!success);
      }, 1000);
      setTimeout(() => {
        setSuccess(false);
        navigation.goBack();
      }, 3000)
    } else {
      setShowMessage({
        password: "Campo obligatorio",
        newPassword: "Campo obligatorio",
        confirmPassword: "Campo obligatorio",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.textoInicial}>Cambiar Contraseña:</Text>
        <Text style={styles.label}>Contraseña:</Text>
        <Input
        value={password}
          placeholder="Ingresa Tu Contraseña"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          inputStyle={styles.fontSize}
          containerStyle={styles.input}
          onChange={({ nativeEvent: { text } }) => setPassword(text)}
          errorMessage={showMessage.password}
          secureTextEntry={showPassword1}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword1 ? "eye-outline" : "eye-off-outline"}
              color="black"
              onPress={() => setShowPassword1(!showPassword1)}
            />
          }
          leftIcon={<Icon type="material-community" name="lock" />}
        />
        <Text style={styles.label}>Nueva Contraseña:</Text>
        <Input
        value={newPassword}
          placeholder="Ingresa Nueva Contraseña"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          inputStyle={styles.fontSize}
          onChange={({ nativeEvent: { text } }) => setNewPassword(text)}
          containerStyle={styles.input}
          errorMessage={showMessage.newPassword}
          secureTextEntry={showPassword2}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword2 ? "eye-outline" : "eye-off-outline"}
              color="black"
              onPress={() => setShowPassword2(!showPassword2)}
            />
          }
          leftIcon={<Icon type="material-community" name="lock" />}
        />
        <Text style={styles.label}>Confirmar Contraseña:</Text>
        <Input
        value={confirmPassword}
          placeholder="Confirmar tu Contraseña"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          inputStyle={styles.fontSize}
          onChange={({ nativeEvent: { text } }) => setConfirmPassword(text)}
          containerStyle={styles.input}
          errorMessage={showMessage.confirmPassword}
          secureTextEntry={showPassword3}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword3 ? "eye-outline" : "eye-off-outline"}
              color="black"
              onPress={() => setShowPassword3(!showPassword3)}
            />
          }
          leftIcon={<Icon type="material-community" name="lock" />}
        />
        <Button
          title="Cambiar Contraseña"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle}
          titleStyle={styles.titleStyle}
          onPress={CambiarContraseña}
        />
        <Button
          title="Cancelar"
          type="clear"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle2}
          titleStyle={styles.titleBtnStyle2}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Loading visible={visible} title="Cambiando Contraseña" />
      <Message
        type={"error"}
        visible={error}
        setVisible={setError}
        title="Error al cambiar la contraseña"
      />
      <Message
        type={"warning"}
        visible={warning}
        setVisible={setWarning}
        title="Usuario o contraseña no valida"
      />
      <Message
        type={"success"}
        visible={success}
        setVisible={setSuccess}
        title="Cambio realizado con éxito"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    width: "80%",
  },
  textoInicial: {
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 24,
    marginTop: 8,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#009475",
  },
  label: {
    fontSize: 16,
    color: "#0655AA",
    marginTop: 15,
  },
  textInput: {
    borderBottomWidth: 0,
  },
  btnStyle: {
    backgroundColor: "#002E60",
  },
  btnContainer: {
    width: "90%",
    marginTop: 16,
    borderRadius: 50,
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
  titleBtnStyle2: {
    color: "#002E60",
  },
  fontSize: {
    fontSize: 14,
  },
});