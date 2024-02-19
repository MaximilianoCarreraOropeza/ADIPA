import { StyleSheet, View, Text } from "react-native";
import React, {useState} from "react";
import { Input, Icon, Button } from "@rneui/base";

export default function RecuperaCuenta() {
  const [showMessage, setShowMessage] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.textoInicial}>Recupera tu cuenta:</Text>
      <Text style={styles.textInput}>
        Matricula:
      </Text>

      <Input
        placeholder="Ingresa tu matricula"
        keyboardType="email-address"
        // Esto es un callback function
        labelStyle={styles.label}
        containerStyle={styles.inputMatricula}
        errorMessage={showMessage}
        leftIcon={
          <Icon
            type='material-community'
            style={styles.icono}
            name={showMessage ? 'account-outline' : 'account'}
          />
        }
      />
      <Text style={styles.txtAviso}>
        Se enviará un enlace para reestablecer su contraseña al correo asociado a su cuenta.
      </Text>
      <Button
        title='Continuar'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        titleStyle={{ color: "white" }}
      />
      <Button
        title='Cancelar'
        containerStyle={styles.btnContainer2}
        buttonStyle={styles.btnStyle2}
        titleStyle={{ color: "#002E60" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  textoInicial: {
    fontWeight: 'bold',
    fontSize: "25",
    alignSelf: "baseline",
    marginBottom: 35,
    marginTop: 15,
    marginLeft: 25
    
  },
  inputMatricula: {
    width: 350,
    paddingHorizontal: 15,
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "#009475"
  },
  textInput:{
    color: '#02E60',
    fontSize: 20,
    marginRight: 250
  },
  txtAviso: {
    paddingHorizontal: 12,
    fontWeight: "bold"
  },
  btnStyle: {
    backgroundColor: '#002E60',
    color: '#000',
    borderRadius: 50
  },
  btnContainer: {
    width: '80%',
    paddingTop: 25
  },
  btnStyle2: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#002E60',
    borderRadius: 50
  },
  btnContainer2: {
    width: '80%',
    paddingTop: 25
  }
});
