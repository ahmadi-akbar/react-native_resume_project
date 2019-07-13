import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.2)"
  },
  text: {
    fontSize: 16,
    color: "white"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 50
  },
  row: {
    flexDirection: "row"
  },
  button: {
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 40
  }
});
export default styles;
