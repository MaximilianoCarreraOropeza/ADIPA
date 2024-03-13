import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Image, Icon, Button } from "@rneui/base";
import Logo from "../../../../assets/logo.png";
import { isEmpty } from "lodash";

export default function Login(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showMessage, setShowMessage] = useState("");
  const login = async () => {
    if (!isEmpty(email) && !isEmpty(password)) {
      setShowMessage("");
      try {
      } catch (error) {
      } finally {
      }
    } else {
      setShowMessage("Campos obligatorios");
    }
  };
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.label}>Matricula:</Text>
      <Input
        placeholder="Ingresa Tu Matricula"
        keyboardType="email-address"
        placeholderTextColor={"#70BEAE"}
        inputContainerStyle={styles.textInput}
        onChange={({ nativeEvent: { text } }) => setEmail(text)}
        containerStyle={styles.input}
        errorMessage={showMessage}
        leftIcon={<Icon type="material-community" name="account" />}
      />
      <Text style={styles.label}>Contraseña: </Text>
      <Input
        placeholder="Ingresa Tu Contraseña"
        placeholderTextColor={"#70BEAE"}
        inputContainerStyle={styles.textInput}
        onChange={({ nativeEvent: { text } }) => setPassword(text)}
        containerStyle={styles.input}
        secureTextEntry={showPassword}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            color="black"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        leftIcon={<Icon type="material-community" name="lock" />}
        errorMessage={showMessage}
      />
      <Button
        title="¿Olvidaste tu contraseña?"
        type="clear"
        containerStyle={styles.container2}
        buttonStyle={styles.btnStyle2}
        titleStyle={styles.titleBtnStyle2}
        onPress={() => navigation.navigate("Contra")}
      />
      <Button
        title="Iniciar Sesión"
        onPress={login}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
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
  container2: {
    width: "50%", 
    marginBottom: 16,
    alignSelf: "flex-end",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  titleBtnStyle2: {
    fontSize: 16,
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#009475",
  },
  label: {
    fontSize: 20,
    color: "#0655AA",
    alignSelf: "baseline",
    marginLeft: 15,
    marginTop: 15,
  },
  btnStyle: {
    backgroundColor: "#002E60",
    color: "#000",
    borderRadius: 50,
  },
  btnContainer: {
    width: "80%",
  },
  btnStyle2: {
    color: "#002E60",
  },
  textInput: {
    borderBottomWidth: 0,
  },
});
