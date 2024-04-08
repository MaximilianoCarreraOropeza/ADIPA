import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../../autorizacion/screens/Login";
import CambiarContra from "../../../autorizacion/screens/RecuperaCuenta";
import ValideToken from "../../../autorizacion/screens/ValideToken";
import Register from "../../../autorizacion/screens/Register";

const Stack = createStackNavigator();

export default function AuthStack(props) {
  const { setIsAuthenticated } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {() => <Login setIsAuthenticated={setIsAuthenticated} />}
      </Stack.Screen>
      <Stack.Screen
        name="Contra"
        component={CambiarContra}
        options={{
          headerTitle: "Recupera tu Cuenta",
          headerTitleAlign: "center",
          headerShown: true,
          headerTitleStyle: {fontWeight: "bold", fontSize: 21},
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Stack.Screen
        name="ValideToken"
        component={ValideToken}
        options={{
          headerTitle: "Cambiar Contraseña",
          headerTitleAlign: "center",
          headerShown: true,
          headerTitleStyle: {fontWeight: "bold", fontSize: 21},
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: "Registra tu Usuario",
          headerTitleAlign: "center",
          headerShown: true,
          headerTitleStyle: {fontWeight: "bold", fontSize: 21},
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Stack.Navigator>
  );
}
