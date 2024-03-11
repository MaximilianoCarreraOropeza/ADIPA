import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "@rneui/base";

export default function CambiarContra(props) {
  const {navigation} = props;
  const [showMessage, setShowMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [showPassword3, setShowPassword3] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.textoInicial}>Cambiar Contraseña:</Text>
      <Text style={styles.label}>Contraseña:</Text>
      <Input
        placeholder="Ingresa Tu Contraseña"
        placeholderTextColor={"#70BEAE"}
        inputContainerStyle={styles.textInput}
        onChange={({ nativeEvent: { text } }) => setPassword(text)}
        containerStyle={styles.input}
        errorMessage={showMessage}
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
        placeholder="Ingresa Nueva Contraseña"
        placeholderTextColor={"#70BEAE"}
        inputContainerStyle={styles.textInput}
        onChange={({ nativeEvent: { text } }) => setNewPassword(text)}
        containerStyle={styles.input}
        errorMessage={showMessage}
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
        placeholder="Confirmar tu Contraseña"
        placeholderTextColor={"#70BEAE"}
        inputContainerStyle={styles.textInput}
        onChange={({ nativeEvent: { text } }) => setConfirmPassword(text)}
        containerStyle={styles.input}
        errorMessage={showMessage}
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
        title="Iniciar Sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
      />
      <Button
        title="Cancelar"
        type="clear"
        containerStyle={styles.container2}
        buttonStyle={styles.btnStyle2}
        titleStyle={styles.titleBtnStyle2}
        onPress={() => (navigation.goBack())}
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
    padding: 16,
  },
  textoInicial: {
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 5,
  },
  input: {
    height: 60,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#009475",
  },
  label: {
    fontSize: 16,
    color: "#0655AA",
    alignSelf: "baseline",
    marginLeft: 15,
    marginTop: 15,
  },
  textInput: {
    borderBottomWidth: 0,
  },
  container2: {
    width: "80%",
    marginTop: 16,
  },
  btnStyle: {
    backgroundColor: "#002E60",
    color: "#000",
    borderRadius: 50,
  },
  btnContainer: {
    width: "80%",
    marginTop: 16,
  },
  btnStyle2: {
    backgroundColor: "#002E60",
    borderRadius: 50,
  },
  titleBtnStyle2: {
    color: "#ffff",
  },
});
