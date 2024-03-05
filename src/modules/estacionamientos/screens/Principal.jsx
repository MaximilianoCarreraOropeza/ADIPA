import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

export default function Principal(props) {
  const {navigation} = props
  return (
    <View>
      <Button title="CafeBalcon" onPress={() => navigation.navigate('CafeBalcon')}></Button>
      <Button title="CDS" onPress={() => navigation.navigate('CDS')}></Button>
      <Button title="CDSMotos" onPress={() => navigation.navigate('CDSMotos')}></Button>
      <Button title="Cedim" onPress={() => navigation.navigate('Cedim')}></Button>
      <Button title="Docencia1" onPress={() => navigation.navigate('Docencia1')}></Button>
      <Button title="Docencia3" onPress={() => navigation.navigate('Docencia3')}></Button>
      <Button title="Docencia3Motos" onPress={() => navigation.navigate('Docencia3Motos')}></Button>
      <Button title="Docencia4" onPress={() => navigation.navigate('Docencia4')}></Button>
      <Button title="Docencia5" onPress={() => navigation.navigate('Docencia5')}></Button>
      <Button title="Jardineras" onPress={() => navigation.navigate('Jardineras')}></Button>
      <Button title="TallerPesado2" onPress={() => navigation.navigate('TallerPesado2')}></Button>
      <Button title="Perfil" onPress={() => navigation.navigate('Perfil')}></Button>
      <Button title="Cambiar contraseña" onPress={() => navigation.navigate('CambiarContra')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
