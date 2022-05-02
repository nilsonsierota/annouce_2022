import { StyleSheet } from "react-native";

import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 100,
    padding: 20,
  },
  search: {
    padding: 10,
    borderColor: theme.COLORS.BLACK,
    borderWidth: 1,
    height: 35,
  },
  types: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 30,
  },
  typesText: {
    marginRight: 20,
  },
  page: {
    height: 600,
  },
  list: {
    flex: 1,
    width: 350,
    alignContent: "stretch",
  },
  announces: {
    height: 250,
    width: 165,
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: theme.COLORS.GREY,
    borderWidth: 2,
    marginRight: 20,
    marginBottom: 20,
  },
  announcesImage: {
    height: 150,
  },
  announcesText: {
    color: theme.COLORS.GREEN,
  },
  announcesPrice: {
    color: theme.COLORS.GREY,
  },
  buttons: {
    flex: 1,
    width: 350,
    height: 50,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    width: 150,
    height: 40,
    marginTop: 10,
    backgroundColor: theme.COLORS.PRIMARY,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 11,
  },
});
