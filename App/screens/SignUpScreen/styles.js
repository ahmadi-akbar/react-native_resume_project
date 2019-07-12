import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "12%"
  },
  content: {
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 5
  },
  text: {
    fontSize: 14,
    color: "white",
    ...Platform.select({
      ios: {
        fontFamily: "IRANSansMobile",
        fontWeight: "200"
      },
      android: {
        fontFamily: "IRANSansMobile_Light"
      }
    })
  },
  bigText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  textInput: {
    textAlign: "right",
    color: "black",
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "pink",
    paddingRight: 10,
    marginHorizontal: 10
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "rgb(66,107,215)",
    borderRadius: 5,
    elevation: 3,
    marginTop: 25
  },
  signIn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15
  },
  signInText: {
    color: "pink",
    fontWeight: "bold"
  },
  bottom: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center"
  }
});

export default styles;
