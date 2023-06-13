import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 45,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightSide: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detail: {
    flexDirection: "column",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  right: {
    marginLeft: 50,
  },
});

export default styles;
