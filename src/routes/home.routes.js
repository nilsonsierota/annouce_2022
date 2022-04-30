import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { AnnounceCreate } from "../screens/AnnounceCreate";
import { AnnounceDescription } from "../screens/AnnounceDescription";

const { Navigator, Screen } = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="announce_create" component={AnnounceCreate} />
      <Screen name="announce_description" component={AnnounceDescription} />
    </Navigator>
  );
}
