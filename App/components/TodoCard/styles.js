import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    margin: 10,
    borderColor: "transparent",
    borderBottomColor: "pink",
    borderWidth: 1
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10
  },
  image: {
    width: 25,
    height: 25
  },
  text: {
    flex: 8,
    fontSize: 18
  },
  done: {
    color: "#909090",
    textDecorationLine: "line-through"
  }
});
export default styles;
