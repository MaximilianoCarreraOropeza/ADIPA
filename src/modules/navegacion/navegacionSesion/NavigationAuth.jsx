import React from "react";
import AuthStack from "./stack/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function (props) {
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
        <Tab.Screen name="Auth" component={AuthStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
