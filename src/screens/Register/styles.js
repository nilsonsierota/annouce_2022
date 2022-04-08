import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 16,
    lineHeight: 40,
  },
  textInput: {
    width: 300,
    height: 40,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 5,
  },
  button: {
    width: 140,
    height: 40,
    marginTop: 10,
    backgroundColor: "orange",
    justifyContent: "center",
  },
  buttons: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    textAlign: "center",
  },
});
