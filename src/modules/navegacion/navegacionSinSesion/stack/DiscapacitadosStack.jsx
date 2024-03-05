import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Discapcitados from "../../../discapacitados/screens/Discapacitado";
import { Icon } from "@rneui/base";

const stack = createStackNavigator();

export default function DiscapacitadosStack() {
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
      }}
    >
      <stack.Screen name="DiscapacitadosScreen" component={Discapcitados} />
    </stack.Navigator>
  );
}
