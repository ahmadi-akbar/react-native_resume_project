import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contatiner: {
    bottom: 0,
    height: 80
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#5C6BC0",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  image: {
    marginTop: 5,
    width: 30,
    height: 30,
    marginLeft: 10
  },
  text: {
    marginLeft: 10,
    fontSize: 36,
    color: "white"
  }
});
export default styles;
