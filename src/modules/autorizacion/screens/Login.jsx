import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Image, Icon, Button } from "@rneui/base";
import Logo from "../../../../assets/logo.png";
import { isEmpty } from "lodash";
import Loading from "../../../kernel/components/Loading";
import Message from "../../../kernel/components/Message";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const API_URL = "http://192.168.1.82:8080/adipa/auth/signin";

export default function Login(props) {
  const { setIsAuthenticated } = props;
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showMessage, setShowMessage] = useState({ email: "", password: "" });
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);

  const login = async () => {
    if (!isEmpty(email) && !isEmpty(password)) {
      setShowMessage({ email: "", password: "" });
      try {
        setVisible(!visible);
        const response = await axios
          .post(API_URL, {
            matricula: email,
            contrasena: password,
          })
          .catch(() => {
            setTimeout(() => {
              setVisible(false);
              setError(!error);
            }, 2000);
          });
        if (response.status === 200) {
          const session = {
            id: response.data.data.usuario.id_usuario,
            token: response.data.data.token,
            matricula: response.data.data.usuario.matricula,
            name: response.data.data.usuario.persona.nombre,
            surname: response.data.data.usuario.persona.apellido_p,
            lastname: response.data.data.usuario.persona.apellido_m,
            rol: response.data.data.usuario.tipoUsuario.nombre,
          };
          const storeData = async () => {
            try {
              await AsyncStorage.setItem("session", JSON.stringify(session));
            } catch (e) {
              console.error(e);
            }
          };
          storeData();
          setTimeout(() => {
            setVisible(false);
            setSuccess(!success);
          }, 1000);
          setTimeout(() => {
            setSuccess(false);
            setIsAuthenticated(true);
          }, 3000);
        }
      } catch (error) {
        setError(!error);
      }
    } else {
      setShowMessage({
        email: "Campo obligatorio",
        password: "Campo obligatorio",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.container3}>
        <Text style={styles.label}>Matricula:</Text>
        <Input
          value={email}
          placeholder="Ingresa Tu Matricula"
          keyboardType="email-address"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          inputStyle={styles.fontSize}
          containerStyle={styles.input}
          onChange={({ nativeEvent: { text } }) => setEmail(text)}
          leftIcon={<Icon type="material-community" name="account" />}
          errorMessage={showMessage.email}
        />
        <Text style={styles.label}>Contraseña: *</Text>
        <Input
          value={password}
          placeholder="Ingresa Tu Contraseña"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          containerStyle={styles.input}
          inputStyle={styles.fontSize}
          onChange={({ nativeEvent: { text } }) => setPassword(text)}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          leftIcon={<Icon type="material-community" name="lock" />}
          secureTextEntry={showPassword}
          errorMessage={showMessage.password}
        />
        <View style={styles.container5}>
          <Button
            title="¿Olvidaste tu contraseña?"
            type="clear"
            containerStyle={styles.btnContainerStyle}
            buttonStyle={styles.btnStyle}
            titleStyle={styles.titleBtnStyle}
            onPress={() => navigation.navigate("Contra")}
          />
        </View>
      </View>
      <View style={styles.container4}>
        <Button
          title="Iniciar Sesión"
          onPress={login}
          containerStyle={styles.btnContainerStyle2}
          buttonStyle={styles.btnStyle2}
          titleStyle={styles.titleBtnStyle2}
          errorMessage={showMessage}
        />
      </View>
      <Loading visible={visible} title="Iniciando Sesión" />
      <Message
        type={"warning"}
        visible={warning}
        setVisible={setWarning}
        title="Error al iniciar sesion"
      />
      <Message
        type={"error"}
        visible={error}
        setVisible={setError}
        title="Usuario y/o contraseña incorrectos"
      />
      <Message
        type={"success"}
        visible={success}
        setVisible={setSuccess}
        title="Se inicio sesion correctamente"
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  container3: {
    flex: 1,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
  },
  container4: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "10%",
  },
  container5: {
    alignSelf: "flex-end",
  },
  logo: {
    width: 120,
    height: 120,
  },
  titleBtnStyle: {
    fontSize: 16,
  },
  titleBtnStyle2: {
    fontSize: 18,
  },
  input: {
    height: 50,
    paddingHorizontal: 12,
    marginBottom: 24,
    marginTop: 8,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#009475",
  },
  label: {
    fontSize: 18,
    marginLeft: 8,
    color: "#0655AA",
    alignSelf: "flex-start",
  },
  btnStyle: {
    color: "#002E60",
    borderRadius: 50,
  },
  btnContainerStyle: {
    width: 250,
  },
  btnContainerStyle2: {
    width: 250,
    marginTop: "5%",
  },
  btnStyle2: {
    backgroundColor: "#002E60",
    color: "#000",
    borderRadius: 50,
  },
  textInput: {
    borderBottomWidth: 0,
  },
  fontSize: {
    fontSize: 16,
  },
});
