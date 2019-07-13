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
        <View style={styles.row}>
          <CustomButton
            style={styles.button}
            title="Todo"
            onPress={() => navigate("Todo")}
          />
          <CustomButton
            style={styles.button}
            title="Weather"
            onPress={() => navigate("Weather")}
          />
        </View>
        <View style={styles.row}>
          <CustomButton
            style={styles.button}
            title="SignIn"
            onPress={() => navigate("SignIn")}
          />
          <CustomButton
            style={styles.button}
            title="SignUp"
            onPress={() => navigate("SignUp")}
          />
        </View>
        <CustomButton title="Temp" onPress={() => navigate("Temp")} />
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
