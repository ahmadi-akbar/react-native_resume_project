import React, { PureComponent } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import CustomButton from "../components/CustomButton";
import styles from "../styles";

export class HomeScreen extends PureComponent {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <CustomButton title="Todo" onPress={() => navigate("Todo")} />
        <CustomButton title="Weather" onPress={() => navigate("Weather")} />
        <CustomButton title="Temp" onPress={() => navigate("Temp")} />
        <CustomButton title="SignIn" onPress={() => navigate("SignIn")} />
        <CustomButton title="SignUp" onPress={() => navigate("SignUp")} />
        <CustomButton title="Modal" onPress={() => navigate("Modal")} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
