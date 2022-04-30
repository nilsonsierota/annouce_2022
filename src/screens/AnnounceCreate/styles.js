import { StyleSheet } from "react-native";
import theme from "../../theme";

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
  button: {
    width: 140,
    height: 40,
    marginTop: 10,
    backgroundColor: theme.COLORS.PRIMARY,
    justifyContent: "center",
  },
  buttons: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 300,
  },
  buttonText: {
    textAlign: "center",
  },
  textInput: {
    width: 300,
    height: 40,
    textAlign: "center",
    borderColor: theme.COLORS.BLACK,
    borderWidth: 1,
    marginTop: 5,
  },
  textDescription: {
    width: 300,
    height: 200,
    textAlign: "center",
    borderColor: theme.COLORS.BLACK,
    borderWidth: 1,
    marginTop: 5,
  },
});
