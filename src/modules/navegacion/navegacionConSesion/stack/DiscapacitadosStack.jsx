import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Discapcitados from "../../../discapacitados/screens/Discapacitado";
import CDS from "../../../estacionamientos/screens/CDS";
import Docencia1 from "../../../estacionamientos/screens/Docencia1";
import CafeBalcon from "../../../estacionamientos/screens/CafeBalcon";
import Docencia3 from "../../../estacionamientos/screens/Docencia3";
import Docencia4 from "../../../estacionamientos/screens/Docencia1";
import Docencia5 from "../../../estacionamientos/screens/Docencia5";
import Cedim from "../../../estacionamientos/screens/Cedim";
import logo from "../../../../../assets/logo.png";

const stack = createStackNavigator();

export default function DiscapacitadosStack() {
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
        headerRight: () => (
          <Image
            style={styles.img}
            source={logoapp}
          ></Image>
        )
      }}
    >
      <stack.Screen 
        name="DiscapacitadosScreen" 
        component={Discapcitados}
      />
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
    </stack.Navigator>
  );
}


const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 30,
    marginRight: 15,
  }
});
