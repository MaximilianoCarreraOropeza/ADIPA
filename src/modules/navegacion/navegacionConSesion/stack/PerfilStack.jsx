import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Perfil from "../../../perfil/screens/Perfil";
import CambiarContra from "../../../perfil/screens/CambiarContra";
import logo from "../../../../../assets/logo.png";

const stack = createStackNavigator();
const API_URL = "http://192.168.109.154:8080/api/auth/logout";

export default function PerfilStack(props) {
  const { setIsAuthenticated } = props;
  const login = async () => {
    if (!isEmpty(email) && !isEmpty(password)) {
      setShowMessage({ email: "", password: "" });
      try {
        setVisible(!visible);
        const response = await axios.post(API_URL, {
          matricula: email,
          contrasena: password,
        });
        if (response.status === 200) {
          const token = response.data.data.token;
          await AsyncStorage.setItem("token", token);
          setSuccess(!success);
          setTimeout(() => {
            //setIsAuthenticated(true);
            setSuccess(!success);
            console.log(response.data.data.token);
          }, 1000);
        }
      } catch (error) {
        setError(!error);
      } finally {
        setVisible(false);
      }
    } else {
      setShowMessage({
        email: "Campo obligatorio",
        password: "Campo obligatorio",
      });
    }
  };

  const logoapp = logo;
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#002E60",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerRight: () => <Image source={logoapp} style={styles.img} />,
      }}
    >
      <stack.Screen
        name="PerfilScreen"
        options={{ headerTitle: "Perfil" }}
      >
        {() => <Perfil setIsAuthenticated={setIsAuthenticated} />}
        </stack.Screen>
      <stack.Screen
        name="CambiarContra"
        component={CambiarContra}
        options={{
          headerTitle: "",
        }}
      />
    </stack.Navigator>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 30,
    marginRight: 15,
  },
});
