import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActiveIndicator,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import { styles } from "./styles.js";

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [announces, setAnnounces] = useState([]);
  const [status, setStatus] = useState("active");

  const navigation = useNavigation();

  function handleSignOut() {
    auth().signOut();
  }

  function handleAnnouceDescription() {
    navigation.navigate("announce_create");
  }

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
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <TextInput
          style={styles.search}
          placeholder="Barra de Pesquisa"
        ></TextInput>

        <View style={styles.types}>
          <TouchableOpacity style={styles.typesText}>
            <Text>Tipo 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.typesText}>
            <Text>Tipo 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.typesText}>
            <Text>Tipo 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.typesText}>
            <Text>Tipo 4</Text>
          </TouchableOpacity>
        </View>

        {isLoading ? (
          <ActiveIndicator />
        ) : (
          <FlatList
            style={styles.list}
            data={announces}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.announces} onClick={handleAnnouceDescription}>
                <Image style={styles.announcesImage} source={item.image} />
                <Text style={styles.announcesText}>{item.title}</Text>
                <Text style={styles.announcesPrice}>{item.price}</Text>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("announce_create")}
        >
          <Text style={styles.buttonText}>Criar Anuncio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
