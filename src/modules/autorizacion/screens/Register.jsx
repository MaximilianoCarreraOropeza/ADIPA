import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Input, Image, Icon, Button } from "@rneui/base";
import { isEmpty } from "lodash";
import Loading from "../../../kernel/components/Loading";
import Message from "../../../kernel/components/Message";
import { useNavigation } from "@react-navigation/native";
import { postPetition } from "../../../kernel/config/use_connection";


export default function CrearCuenta() {
  const navigation = useNavigation();
  const [showPassword1, setShowPassword1] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [showMessage, setShowMessage] = useState({name: "", surname: "", lastname: "", email: "", password: "", confirmPassword: "" });
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [lastname, setLastname] = useState("");

  const CrearCuenta = () => {
    setVisible(!visible);
    const info = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        name: name,
        surname: surname,
        lastname: lastname,
    };
    console.log(info);
    if (!(isEmpty(email) && isEmpty(password) && isEmpty(confirmPassword) && isEmpty(name) && isEmpty(surname) && isEmpty(lastname))){
      if (password !== confirmPassword){
        setTimeout(() => {
          setVisible(false);
          setWarning(!warning);
        }, 1000);
      } else {
        const tempName = name.split(" ");
        if(tempName.length > 0){
            if(tempName.length <= 2){
            var name1 = tempName[0];
            var name2 = tempName[1];
        } else {
           var name1 = tempName[0];
           var name2 = tempName[1] + " " + tempName[2];
        }
    } else {
        var name1 = name;
        var name2 = "NoAplica";
    }
    console.log(`${name1} ${name2}`);
    postPetition({ 
    usuario: info.email,
    contrasena: info.confirmPassword,
    nombre1: name1,
    nombre2: name2,
    apellido_p: info.lastname,
    apellido_m: info.surname,
      }).then(
        (response) => {
          console.log(response);
            if(response.status === 'OK'){
                setTimeout(() => {
                  setVisible(false);
                  setSuccess(!success);
                }, 1000);
                setTimeout(() => {
                    setSuccess(false);
                    navigation.goBack();
                }, 3000);
            } else {
              setTimeout(() => {
                setVisible(false);
                setSuccess(!success);
              }, 1000);
            }
        }
      ).catch(() => {
        setTimeout(() => {
          setVisible(false);
          setSuccess(!success);
        }, 1000);
      });
      }
        
    } else {
      setShowMessage({name: "Campo obligatorio", surname: "Campo obligatorio", lastname: "Campo obligatorio", email: "Campo obligatorio", password: "Campo obligatorio", confirmPassword: "Campo obligatorio"});
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
    <View style={styles.container}>
        <View style={styles.container3}>
            <Text style={styles.label}>Nombre(s):</Text>
            <Input
            value={name}
                placeholder="Ingrese su nombre"
                placeholderTextColor={"#70BEAE"}
                inputContainerStyle={styles.textInput}
                inputStyle={styles.fontSize}
                onChange={({ nativeEvent: { text } }) => setName(text)}
                containerStyle={styles.input}
                leftIcon={<Icon type="material-community" name="face-man" />}
                errorMessage={showMessage.name}
            />
            <Text style={styles.label}>Apellido Paterno:</Text>
            <Input
            value={surname}
                placeholder="Ingrese su apellido paterno"
                placeholderTextColor={"#70BEAE"}
                inputContainerStyle={styles.textInput}
                inputStyle={styles.fontSize}
                containerStyle={styles.input}
                onChange={({ nativeEvent: { text } }) => setSurname(text)}
                leftIcon={<Icon type="material-community" name="human-male" />}
                errorMessage={showMessage.lastname}
            />
            <Text style={styles.label}>Apellido Materno</Text>
            <Input
            value={lastname}
                placeholder="Ingrese su materno"
                placeholderTextColor={"#70BEAE"}
                inputContainerStyle={styles.textInput}
                inputStyle={styles.fontSize}
                containerStyle={styles.input}
                onChange={({ nativeEvent: { text } }) => setLastname(text)}
                leftIcon={<Icon type="material-community" name="human-female" />}
                errorMessage={showMessage.surname}
            />
            <Text style={styles.label}>Correo Electrónico:</Text>
            <Input
            value={email}
                placeholder="Ingrese su correo electrónico"
                keyboardType="email-address"
                placeholderTextColor={"#70BEAE"}
                inputContainerStyle={styles.textInput}
                inputStyle={styles.fontSize}
                containerStyle={styles.input}
                onChange={({ nativeEvent: { text } }) => setEmail(text)}
                leftIcon={<Icon type="material-community" name="account" />}
                errorMessage={showMessage.email}
            />
            <Text style={styles.label}>Contraseña:</Text>
            <Input
            value={password}
                placeholder="Ingrese su nombre"
                placeholderTextColor={"#70BEAE"}
                onChange={({ nativeEvent: { text } }) => setPassword(text)}
                inputContainerStyle={styles.textInput}
                inputStyle={styles.fontSize}
                containerStyle={styles.input}
                rightIcon={
                    <Icon
                      type="material-community"
                      name={showPassword2 ? "eye-outline" : "eye-off-outline"}
                      color="black"
                      onPress={() => setShowPassword2(!showPassword2)}
                    />
                  }
                  leftIcon={<Icon type="material-community" name="lock" />}
                  secureTextEntry={showPassword2}
                  errorMessage={showMessage.password}
            />
            <Text style={styles.label}>Confirmar Contraseña:</Text>
            <Input
            value={confirmPassword}
                placeholder="Ingrese una contraseña"
                placeholderTextColor={"#70BEAE"}
                inputContainerStyle={styles.textInput}
                inputStyle={styles.fontSize}
                onChange={({ nativeEvent: { text } }) => setConfirmPassword(text)}
                containerStyle={styles.input}
                rightIcon={
                    <Icon
                      type="material-community"
                      name={showPassword1 ? "eye-outline" : "eye-off-outline"}
                      color="black"
                      onPress={() => setShowPassword1(!showPassword1)}
                    />
                  }
                  leftIcon={<Icon type="material-community" name="lock" />}
                  secureTextEntry={showPassword1}
                  errorMessage={showMessage.password}
            />
        </View>
        <View style={styles.container4}>
        <Button
          title="Registrate"
          onPress={CrearCuenta}
          containerStyle={styles.btnContainerStyle2}
          buttonStyle={styles.btnStyle2}
          titleStyle={styles.titleBtnStyle2}
          errorMessage={showMessage}
        />
        <Button
          title="Cancelar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.btnContainerStyle2}
          buttonStyle={styles.btnStyle3}
          titleStyle={styles.titleBtnStyle3}
          errorMessage={showMessage}
        />
        </View>
      <Loading visible={visible} title="Creando Cuenta"/>
      <Message
        type={"error"}
        visible={error}
        setVisible={setError}
        title="Error al crear cuenta"
      />
      <Message
        type={"warning"}
        visible={warning}
        setVisible={setWarning}
        title="Contraseñas no coinciden"
      />
      <Message
        type={"success"}
        visible={success}
        setVisible={setSuccess}
        title="Se creo la cuenta correctamente"
      />
    </View>
    </ScrollView>
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
        marginTop: "5%",
      },
      container3: {
        flex: 1,
        width: "85%",
        alignItems: "center",
        paddingTop: 20,
      },
      container4: {
        flex: 1,
        width: "80%",
        alignItems: "center",
      },
      container5: {
        alignSelf: "flex-end",
      },
      textoInicial: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 15,
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
        width: "100%",
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
      btnStyle3: {
        backgroundColor: "#ffffff",
        borderColor: "#002E60",
        borderWidth: 2,
        borderRadius: 50,
      },
      titleBtnStyle3: {
        fontSize: 18,
        color: "#002E60",
      },
});
