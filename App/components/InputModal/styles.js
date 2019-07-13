import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.2)",
    paddingVertical: "30%"
  },
  text: {
    fontSize: 16,
    color: "white"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  },
  modal: {
    justifyContent: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    elevation: 50
  },
  row: {
    flexDirection: "row"
  },
  button: {
    width: 100,
    borderRadius: 5,
    paddingVertical: 10
  },
  textInput: {
    borderColor: "rgba(0,0,0,.2)",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 15
  }
});
export default styles;
