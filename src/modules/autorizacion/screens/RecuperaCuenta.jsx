import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "@rneui/base";
import Loading from "../../../kernel/components/Loading";
import Message from "../../../kernel/components/Message";
import { isEmpty } from "lodash";
import { getUserByMatricula } from "../../../kernel/components/use_slot";

export default function RecuperaCuenta(props) {
  const { navigation } = props;
  const [showMessage, setShowMessage] = useState({ matricula: "" });
  const [matricula, setMatricula] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const enviarCorreo = async () => {
    if (!isEmpty(matricula)) {
      setShowMessage({ matricula: "" });
      setSuccess(true);
      navigation.navigate("ValideToken", matricula);
    } else {
      setShowMessage({ matricula: "Campo obligatorio" });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.textoInicial}>Recupera tu cuenta:</Text>
        <Text style={styles.label}>Matricula: </Text>
        <Input
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
        title="Error enviando matricula"
      />
      <Message
        type={"success"}
        visible={success}
        setVisible={setSuccess}
        title="Se envio matricula correctamente"
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
  textoInicial: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "flex-start",
    marginBottom: 5,
    marginTop: 15,
    marginLeft: 20,
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
