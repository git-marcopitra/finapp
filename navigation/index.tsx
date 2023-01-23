import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";

import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation: FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
