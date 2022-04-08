import { StyleSheet } from "react-native";

import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: theme.COLORS.WHITE,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 50,
    fontFamily: theme.FONTS.TITLE,
    fontSize: 20,
  },
  textLogin: {
    color: theme.COLORS.SUBTEXT,
    justifyContent: "center",
    textAlign: "center",
  },
  textRegister: {
    color: theme.COLORS.TEXT,
    justifyContent: "center",
    textAlign: "center",
  },
  textUse: {
    color: theme.COLORS.BLACK,
    marginBottom: 25,
  },
  textGoogle: {
    color: theme.COLORS.BLACK,
    justifyContent: "center",
    textAlign: "center",
  },
  textFacebook: {
    color: theme.COLORS.SUBTEXT,
    justifyContent: "center",
    textAlign: "center",
  },
  image: {
    height: 240,
    marginTop: 50,
    marginBottom: 80,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLogin: {
    width: 335,
    height: 54,
    marginBottom: 17,
    backgroundColor: theme.COLORS.PRIMARY,
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: theme.COLORS.GREEN,
  },
  buttonRegister: {
    width: 335,
    height: 54,
    marginBottom: 30,
    backgroundColor: theme.COLORS.WHITE,
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: theme.COLORS.GREEN,
  },
  buttonGoogle: {
    width: 335,
    height: 38,
    marginBottom: 9,
    backgroundColor: theme.COLORS.WHITE,
    justifyContent: "center",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "grey",
  },
  buttonFacebook: {
    width: 335,
    height: 38,
    marginBottom: 40,
    backgroundColor: theme.COLORS.BLUE,
    justifyContent: "center",
    marginBottom: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: theme.COLORS.BLUE,
  },
});
