import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

export function GetStart() {
  const [loading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{"Nome do Aplicativo"}</Text>
      <View style={styles.image}></View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate("signIn")}
        >
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.textRegister}>Registrar</Text>
        </TouchableOpacity>

        <Text style={styles.textUse}>
          ----------------------- Ou Use as Redes Sociais
          -----------------------
        </Text>

        <TouchableOpacity style={styles.buttonGoogle} onPress={() => {}}>
          <Text style={styles.textGoogle}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFacebook} onPress={() => {}}>
          <Text style={styles.textFacebook}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
