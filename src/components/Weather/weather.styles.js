import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#e6e6e6",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  weatherType: {
    fontSize: 30,
    paddingVertical: 3,
  },
  image: {
    width: 60,
    height: 60,
  },
});
export default styles;
