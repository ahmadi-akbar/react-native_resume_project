import React, { PureComponent } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

export class SignInScreen extends PureComponent {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={require("../../assets/img/back.png")}
      >
        <TextInput
          style={[styles.text, styles.textInput, styles.mailText]}
          placeholder="ایمیل"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.text, styles.textInput, styles.passText]}
          secureTextEntry={true}
          placeholder="رمز عبور"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text, styles.bigText]}>ورود</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.passButton}>
          <Text style={styles.text}>رمز عبور را فراموش کردید؟</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <View style={[styles.text, styles.signIn]}>
            <Text style={styles.text}>Don't have an acount? </Text>
            <TouchableOpacity onPress={() => navigate("SignUp")}>
              <Text style={styles.signInText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
