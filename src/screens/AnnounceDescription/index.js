import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";

export function AnnounceDescription() {
  const navigation = useNavigation();
  const route = useRoute(route);

  const item = route.params.item;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina do Anuncio</Text>

      <Text style={styles.textInput}>{item.title}</Text>
      <Text style={styles.textDescription}>{item.description}</Text>
      <Text style={styles.textInput}>{item.price}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>
            Entrar em contato com o anunciante
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
