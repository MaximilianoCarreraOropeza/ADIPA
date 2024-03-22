import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../../autorizacion/screens/Login";
import CambiarContra from "../../../autorizacion/screens/RecuperaCuenta";

const stack = createStackNavigator();

export default function AuthStack(props) {
  const { setIsAuthenticated } = props;
  return (
    <stack.Navigator>
      <stack.Screen
        name="Login"
        options={{ headerShown: false }}
      >
        {() => <Login setIsAuthenticated={setIsAuthenticated} />}  
      </stack.Screen>
      <stack.Screen
        name="Contra"
        component={CambiarContra}
        options={{
          headerTitle: "",
          headerShown: true,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </stack.Navigator>
  );
}
