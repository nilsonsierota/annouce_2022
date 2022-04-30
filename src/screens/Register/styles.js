import { StyleSheet } from "react-native";

import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.COLORS.WHITE,
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    lineHeight: 40,
    justifyContent: "flex-start",
    marginBottom: 160,
  },
  textInput: {
    width: 350,
    height: 40,
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    marginTop: 5,
    borderColor: "#F2F2F2",
    borderRadius: 8,
    marginBottom: 6,
    padding: 5,
  },
  button: {
    width: 335,
    height: 54,
    marginBottom: 17,
    backgroundColor: theme.COLORS.PRIMARY,
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: theme.COLORS.GREEN,
  },
  texts: {
    flexDirection: "row",
  },
  registerText: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: 5,
  },
});
