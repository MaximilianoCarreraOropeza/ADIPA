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

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <Text style={styles.textoInicial}>Creación de Cuenta</Text>
        <Text style={styles.label}>Nombre(s): *</Text>
        <Input
          placeholder="Ingrese su nombre"
          keyboardType="email-address"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          inputStyle={styles.fontSize}
          containerStyle={styles.input}
          leftIcon={<Icon type="material-community" name="face-man" />}
          errorMessage={showMessage.email}
        />

        <Text style={styles.label}>Apellido Paterno: *</Text>
        <Input
          placeholder="Ingrese su apellido paterno"
          keyboardType="email-address"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          inputStyle={styles.fontSize}
          containerStyle={styles.input}
          leftIcon={<Icon type="material-community" name="human-male" />}
          errorMessage={showMessage.email}
        />

        <Text style={styles.label}>Apellido Materno: *</Text>
        <Input
          placeholder="Ingrese su apellido materno"
          keyboardType="email-address"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          inputStyle={styles.fontSize}
          containerStyle={styles.input}
          leftIcon={<Icon type="material-community" name="human-female" />}
          errorMessage={showMessage.email}
        />

        <Text style={styles.label}>Usuario: *</Text>
        <Input
          placeholder="Ingrese su nombre de usuario"
          keyboardType="email-address"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          inputStyle={styles.fontSize}
          containerStyle={styles.input}
          leftIcon={<Icon type="material-community" name="account" />}
          errorMessage={showMessage.email}
        />

        <Text style={styles.label}>Contraseña: *</Text>
        <Input
          placeholder="Ingrese su contraseña"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          containerStyle={styles.input}
          inputStyle={styles.fontSize}
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
        <Text style={styles.label}>Confirme su contraseña: *</Text>
        <Input
          placeholder="Ingrese nuevamente su contraseña"
          placeholderTextColor={"#70BEAE"}
          inputContainerStyle={styles.textInput}
          containerStyle={styles.input}
          inputStyle={styles.fontSize}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          leftIcon={<Icon type="material-community" name="lock-alert" />}
          secureTextEntry={showPassword}
          errorMessage={showMessage.password}
        />
        <Button
          title="Crear Cuenta"
          containerStyle={styles.btnContainerStyle2}
          buttonStyle={styles.btnStyle2}
          titleStyle={styles.titleBtnStyle2}
          errorMessage={showMessage}
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Volver a Inicio"
          containerStyle={styles.btnContainerStyle2}
          buttonStyle={styles.btnStyle2}
          titleStyle={styles.titleBtnStyle2}
          errorMessage={showMessage}
          onPress={() => navigation.navigate("Login")}
        />
      </View>

      <Loading visible={visible} title="Creando Cuenta" />

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
        title="Usuario o contraseña no valida"
      />
      <Message
        type={"success"}
        visible={success}
        setVisible={setSuccess}
        title="Se creo la cuenta correctamente"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    flex: 1,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
  },
  container4: {
    width: "85%",
  },
  container5: {
    alignSelf: "flex-end",
  },
  textoInicial: {
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 25,
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
    marginBottom: 16,
    marginTop: 2,
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
  btnContainerStyle2: {
    width: "100%",
    marginTop: 30,
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
