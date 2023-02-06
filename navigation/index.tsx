import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";

import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";
import SignUpScreen from "../screens/sign-up";

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation: FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
