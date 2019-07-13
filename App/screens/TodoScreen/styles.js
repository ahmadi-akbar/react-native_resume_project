import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    alignItems: "center",
    marginVertical: 20
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "blue"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f56363",
    padding: 15
  },
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    borderColor: "transparent",
    borderBottomColor: "pink",
    borderWidth: 1
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999
  },
  bottom: {
    position: "absolute",
    bottom: 0
  }
});

export default styles;
