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
    return (
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={require("../../assets/img/back.png")}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>ورود</Text>
          </View>
          <Text style={styles.text}>ایمیل:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="لطفا ایمیل خود را وارد کنید"
          />
          <Text style={styles.text}>پسورد:</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="لطفا پسورد خود را وارد کنید"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, styles.buttonText]}>
              ورود به اپلیکیشن
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.text, styles.passButton]}>
            <Text>فراموشی رمز عبور</Text>
          </TouchableOpacity>
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
