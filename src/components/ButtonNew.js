import React from "react";
import { StyleSheet, Text } from "react-native";

import { View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import theme from "../theme";

export default function ButtonNew({ size, color }) {
  return (
    <View>
      <Entypo name="plus" size={size} color={color} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
});
