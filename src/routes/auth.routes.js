import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { Register } from "../screens/Register";
import { GetStart } from "../screens/GetStart";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="getStart" component={GetStart} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
}
