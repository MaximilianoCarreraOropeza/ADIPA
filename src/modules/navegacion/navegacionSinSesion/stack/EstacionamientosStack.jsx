import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CafeBalcon from "../../../estacionamientos/screens/CafeBalcon";
import MapaUtez from "../../../estacionamientos/screens/Principal";
import CDS from "../../../estacionamientos/screens/CDS";
import CDSMotos from "../../../estacionamientos/screens/CDSMotos";
import Cedim from "../../../estacionamientos/screens/Cedim";
import Docencia1 from "../../../estacionamientos/screens/Docencia1";
import Docencia3 from "../../../estacionamientos/screens/Docencia3";
import Docencia3Motos from "../../../estacionamientos/screens/Docencia3Motos";
import Docencia4 from "../../../estacionamientos/screens/Docencia4";
import Docencia5 from "../../../estacionamientos/screens/Docencia5";
import Jardineras from "../../../estacionamientos/screens/Jardineras";
import TallerPesado2 from "../../../estacionamientos/screens/TallerPesado2";
import Perfil from "../../../perfil/screens/Perfil";
import CambiarContra from "../../../perfil/screens/CambiarContra";

const stack = createStackNavigator();

export default function EstacionamientosStack() {
  return (
    <stack.Navigator
      initialRouteName="Mapa UTEZ"
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
      }}
    >
      <stack.Screen name="Mapa UTEZ" component={MapaUtez} />
      <stack.Screen
        name="CafeBalcon"
        component={CafeBalcon}
        options={{ headerTitle: "Cafe Balcon" }}
      />
      <stack.Screen
        name="CDS"
        component={CDS}
        options={{ headerTitle: "CDS" }}
      />
      <stack.Screen
        name="CDSMotos"
        component={CDSMotos}
        options={{ headerTitle: "CDS Motos" }}
      />
      <stack.Screen
        name="Cedim"
        component={Cedim}
        options={{ headerTitle: "Cedim" }}
      />
      <stack.Screen
        name="Docencia1"
        component={Docencia1}
        options={{ headerTitle: "Docencia 1" }}
      />
      <stack.Screen
        name="Docencia3"
        component={Docencia3}
        options={{ headerTitle: "Docencia 3" }}
      />
      <stack.Screen
        name="Docencia3Motos"
        component={Docencia3Motos}
        options={{ headerTitle: "Docencia 3 Motos" }}
      />
      <stack.Screen
        name="Docencia4"
        component={Docencia4}
        options={{ headerTitle: "Docencia 4" }}
      />
      <stack.Screen
        name="Docencia5"
        component={Docencia5}
        options={{ headerTitle: "Docencia 5" }}
      />
      <stack.Screen
        name="Jardineras"
        component={Jardineras}
        options={{ headerTitle: "Jardineras" }}
      />
      <stack.Screen
        name="TallerPesado2"
        component={TallerPesado2}
        options={{ headerTitle: "Taller Pesado 2" }}
      />
      <stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerTitle: "Perfil" }}
      />
      <stack.Screen
        name="CambiarContra"
        component={CambiarContra}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
}
