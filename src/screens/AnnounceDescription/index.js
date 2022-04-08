import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import { styles } from "./styles";
import { Alert } from "react-native-web";

export function AnnounceDescription() {
  const [loading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(false);

    const subscriber = firestore()
      .collection("announce")
      .where("status", "==", status)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setAnnounces(data);
        setIsLoading(false);
      });
    return () => subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Crie seu Anuncio."}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Titulo"
        autoCapitalize="none"
        onChangeText={setTitle}
      ></TextInput>

      <TextInput
        style={styles.textDescription}
        placeholder="Descricao"
        autoCapitalize="none"
        onChangeText={setDescription}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        placeholder="Preco"
        autoCapitalize="none"
        onChangeText={setPrice}
      ></TextInput>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleNewAnnounce}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
