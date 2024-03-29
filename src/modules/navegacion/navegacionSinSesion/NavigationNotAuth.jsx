import React from "react";
import AuthStack from "./stack/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function (props) {
  const { setIsAuthenticated } = props;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="AuthStack"
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        })}
      >
        <Tab.Screen name="Auth">
          {() => <AuthStack setIsAuthenticated={setIsAuthenticated} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
