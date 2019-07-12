import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "12%"
  },
  content: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 5
  },
  header: {
    alignItems: "center"
  },
  headerText: {
    fontSize: 26,
    ...Platform.select({
      ios: {
        fontFamily: "IRANSansMobile",
        fontWeight: "bold"
      },
      android: {
        fontFamily: "IRANSansMobile_Bold"
      }
    })
  },
  text: {
    fontSize: 14,
    color: "#5256c9",
    fontFamily: "IRANSansMobile"
  },
  textInput: {
    textAlign: "right",
    ...Platform.select({
      ios: {
        fontFamily: "IRANSansMobile",
        fontWeight: "200"
      },
      android: {
        fontFamily: "IRANSansMobile_Light"
      }
    }),
    fontSize: 12,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 3,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 15
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "rgb(66,107,215)",
    borderRadius: 30,
    elevation: 3
  },
  buttonText: {
    color: "white"
  },
  passButton: {
    marginTop: 15,
    alignItems: "center"
  }
});

export default styles;
