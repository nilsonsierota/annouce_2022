import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Home";
import { AnnounceCreate } from "../screens/AnnounceCreate";
import { AnnounceDescription } from "../screens/AnnounceDescription";
import { Profile } from "../screens/Profile";
import theme from "../theme";

import { Feather } from "@expo/vector-icons";
import { ButtonNew } from "../components/buttonNew";

const HomeTab = createBottomTabNavigator();

function HomeStack() {
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.COLORS.PRIMARY,
          borderColor: "transparent",
        },
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "black",
      }}
    >
      <HomeTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name="announce_create"
        component={AnnounceCreate}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <ButtonNew size={size} color={color} />
          ),
        }}
      />
      <HomeTab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}

const { Navigator, Screen } = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home_stack" component={HomeStack} />
      <Screen name="announce_description" component={AnnounceDescription} />
    </Navigator>
  );
}
