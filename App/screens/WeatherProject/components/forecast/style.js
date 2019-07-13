import { StyleSheet } from "react-native";

const baseFontSize = 16;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start"
  },
  mainText: {
    fontSize: baseFontSize + 4,
    color: "#FFF"
  },
  bigText: {
    fontSize: baseFontSize + 6,
    color: "#FFF"
  },

  icon: {
    height: 50,
    width: 50,
    marginTop: -5
  }
});

export default styles;
