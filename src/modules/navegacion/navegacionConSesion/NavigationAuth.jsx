import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EstacionamientosStack from "./stack/EstacionamientosStack";
import DiscapacitadosStack from "./stack/DiscapacitadosStack";
import GlosarioStack from "./stack/GlosarioStack";
import PerfilStack from "./stack/PerfilStack";
import { Icon} from "@rneui/base";

const Tab = createBottomTabNavigator();

export default function NavigationWithOutAuth() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Principal"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            return (
              <Icon name={iconName} type={iconType} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#002E60",
          },
        })}
      >
        <Tab.Screen name="Principal" component={EstacionamientosStack} />
        <Tab.Screen name="Discapacitados" component={DiscapacitadosStack} />
        <Tab.Screen name="Glosario" component={GlosarioStack} />
        <Tab.Screen name="PerfilStack" component={PerfilStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getIconName = (routeName, focused) => {
  let iconName = "";
  let iconType = "";
  switch (routeName) {
    case "Principal":
      iconName = focused ? "home" : "home-outline";
      iconType = "material-community";
      break;
    case "Discapacitados":
      iconName = focused ? "wheelchair-accessibility" : "human-wheelchair";
      iconType = "material-community";
      break;
    case "Glosario":
      iconName = focused ? "book-open-page-variant" : "book-open-page-variant-outline";
      iconType = "material-community";
      break;
    case "PerfilStack":
      iconName = focused ? "account" : "account-outline";
      iconType = "material-community";
      break;
  }
  return { iconName, iconType };
};
