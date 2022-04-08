import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";

import auth from "@react-native-firebase/auth";

import { styles } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("home"))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert("Redefinir senha", "Enviamos um e-mail para voce.")
      )
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{"Login"}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="E-Mail"
        autoCapitalize="none"
        onChangeText={setEmail}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        placeholder="Senha"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={setPassword}
      ></TextInput>

      <Text style={styles.forgotenText} onPress={handleForgotPassword}>
        Esqueci a senha
      </Text>

      <TouchableOpacity style={styles.buttonLogin} onPress={handleSignIn}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>

      <View style={styles.texts}>
        <Text>Nao tem uma conta?</Text>
        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate("register")}
        >
          Registrar
        </Text>
      </View>
    </SafeAreaView>
  );
}
