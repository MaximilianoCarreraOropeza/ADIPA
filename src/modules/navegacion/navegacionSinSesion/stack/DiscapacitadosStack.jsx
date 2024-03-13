import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Discapcitados from "../../../discapacitados/screens/Discapacitado";
import CDS from "../../../estacionamientos/screens/CDS";
import Docencia1 from "../../../estacionamientos/screens/Docencia1";
import CafeBalcon from "../../../estacionamientos/screens/CafeBalcon";
import Docencia3 from "../../../estacionamientos/screens/Docencia3";
import Docencia4 from "../../../estacionamientos/screens/Docencia1";
import Docencia5 from "../../../estacionamientos/screens/Docencia5";
import Cedim from "../../../estacionamientos/screens/Cedim";
import Perfil from "../../../perfil/screens/Perfil";
import CambiarContra from "../../../perfil/screens/CambiarContra";
import perfilFoto from "../../../../../assets/perfil.png";
import perfilFotoTap from "../../../../../assets/perfilSeleccionado.png";
import logo from "../../../../../assets/logo.png";

const stack = createStackNavigator();

export default function DiscapacitadosStack(props) {
  const { navigation } = props;
  const perfil = perfilFoto;
  const perfil2 = perfilFotoTap;
  const logoapp = logo;
  return (
    <stack.Navigator
      screenOptions={{
        headerTitle: "Mapa UTEZ",
        headerStyle: {
          backgroundColor: "#002E60",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerLeft: () => (
          <Image
            source={require("../../../../../assets/logo.png")}
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PerfilDis");
            }}
          >
            <ImageBackground
              style={styles.img2}
              source={perfil2}
            ></ImageBackground>
          </TouchableOpacity>
        ),
      }}
    >
      <stack.Screen name="DiscapacitadosScreen" component={Discapcitados} />
      <stack.Screen
        name="CDSDis"
        component={CDS}
        options={{ headerTitle: "CDS" }}
      />
      <stack.Screen
        name="Docencia1Dis"
        component={Docencia1}
        options={{ headerTitle: "Docencia 1" }}
      />
      <stack.Screen
        name="CafeBalconDis"
        component={CafeBalcon}
        options={{ headerTitle: "Cafe Balcon" }}
      />
      <stack.Screen
        name="Docencia3Dis"
        component={Docencia3}
        options={{ headerTitle: "Docencia 3" }}
      />
      <stack.Screen
        name="Docencia4Dis"
        component={Docencia4}
        options={{ headerTitle: "Docencia 4" }}
      />
      <stack.Screen
        name="Docencia5Dis"
        component={Docencia5}
        options={{ headerTitle: "Docencia 5" }}
      />
      <stack.Screen
        name="CedimDis"
        component={Cedim}
        options={{ headerTitle: "Cedim" }}
      />
      <stack.Screen
        name="PerfilDis"
        component={Perfil}
        options={{ headerTitle: "Perfil",
        headerRight: () => (
            <ImageBackground
              style={styles.img}
              source={perfil}
            ></ImageBackground>
        ), }}
      />
      <stack.Screen
        name="CambiarContraDis"
        component={CambiarContra}
        options={{
          headerTitle: "",
          headerRight: () => (
              <ImageBackground
                style={styles.img}
                source={perfil}
              ></ImageBackground>
          ),
        }}
      />
    </stack.Navigator>
  );
}


const styles = StyleSheet.create({
  img: {
    backgroundColor: "transparent",
    width: 25,
    height: 30,
    marginRight: 15,
  },
  img2: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    marginRight: 15,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
