import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
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
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  function handleSignOut() {
    auth().signOut();
  }

  useEffect(() => {
    setIsLoading(false);

    const subscriber = firestore()
      .collection("announce")
      .where("status", "==", status && "category", "==", category)
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
          <TouchableOpacity
            style={styles.typesText}
            onPress={() => setCategory("")}
          >
            <Text>Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.typesText}
            onPress={() => setCategory("products")}
          >
            <Text>Produtos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.typesText}
            onPress={() => setCategory("services")}
          >
            <Text>Serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.typesText}
            onPress={() => setCategory("houses")}
          >
            <Text>Imoveis</Text>
          </TouchableOpacity>
        </View>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={styles.list}
            data={announces}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.announces}
                onPress={() =>
                  navigation.navigate("announce_description", {
                    item,
                  })
                }
              >
                <Image style={styles.announcesImage} source={item.image} />
                <Text style={styles.announcesText}>{item.title}</Text>
                <Text style={styles.announcesPrice}>{item.price}</Text>
                <Text style={styles.announcesCategory}>{item.category}</Text>
              </TouchableOpacity>
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
