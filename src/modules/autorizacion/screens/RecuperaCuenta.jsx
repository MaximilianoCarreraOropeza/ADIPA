import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "@rneui/base";

export default function RecuperaCuenta(props) {
  const {navigation} = props;
  const [showMessage, setShowMessage] = useState("");
  const [matricula, setMatricula] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.textoInicial}>Recupera tu cuenta:</Text>
      <Text style={styles.label}>Matricula: </Text>
      <Input
        placeholder="Ingresa tu matricula"
        keyboardType="email-address"
        containerStyle={styles.inputMatricula}
        inputContainerStyle={styles.textInput}
        placeholderTextColor={"#70BEAE"}
        errorMessage={showMessage}
        onChange={({ nativeEvent: { text } }) => setMatricula(text)}
        leftIcon={<Icon type="material-community" name="account" />}
      />
      <Text style={styles.txtAviso}>
        Se enviará un enlace para reestablecer su contraseña al correo asociado
        a su cuenta.
      </Text>
      <Button
        title="Continuar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        titleStyle={styles.titleStyle1}
      />
      <Button
        title="Cancelar"
        type="clear"
        containerStyle={styles.btnContainer2}
        buttonStyle={styles.btnStyle2}
        titleStyle={styles.titleStyle2}
        onPress={()=>navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 20,
    color: "#0655AA",
    alignSelf: "baseline",
    marginLeft: 15,
    marginTop: 15,
  },
  textoInicial: {
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "baseline",
    marginBottom: 5,
    marginTop: 15,
    marginLeft: 25,
  },
  inputMatricula: {
    width: 350,
    height: 60,
    paddingHorizontal: 10,
    marginVertical: 8,
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
    marginHorizontal: 16,
  },
  btnStyle: {
    backgroundColor: "#002E60",
    borderColor: "#002E60",
    borderWidth: 1.5,
    borderRadius: 50,
  },
  btnContainer: {
    width: "80%",
    paddingTop: 25,
  },
  btnStyle2: {
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#002E60",
    borderRadius: 50,
  },
  btnContainer2: {
    width: "80%",
    paddingTop: 25,
  },
  titleStyle1: {
    color: "#fff",
  },
  titleStyle2: {
    color: "#002E60",
  },
});
