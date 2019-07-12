import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "12%"
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
  textInput: {
    backgroundColor: "white",
    color: "black",
    textAlign: "right",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    paddingRight: 15,
    marginBottom: 1,
    elevation: 5
  },
  mailText: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  passText: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  button: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgb(66,107,215)",
    borderRadius: 5,
    elevation: 5,
    marginVertical: 15
  },
  passButton: {
    marginTop: 5,
    alignItems: "center"
  },
  bigText: {
    fontSize: 18,
    fontWeight: "bold"
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
  regText: {
    fontSize: 18,
    fontFamily: "IRANSansMobile",
    color: "white"
  },
  bottom: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center"
  }
});

export default styles;
