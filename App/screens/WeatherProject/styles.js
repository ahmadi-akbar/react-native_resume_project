import { StyleSheet } from "react-native";

const baseFontSize = 16;
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  imgBack: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  overlay: {
    backgroundColor: "#000",
    opacity: 0.65,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 15
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 20
  },
  input: {
    fontSize: baseFontSize + 4,
    color: "#aa5",
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginTop: -3,
    paddingBottom: -8,
    width: 80,
    height: 30
  },
  mainText: {
    fontSize: baseFontSize + 4,
    color: "#FFF"
  },
  bigText: {
    fontSize: baseFontSize + 6,
    color: "#FFF"
  }
});

export default styles;
