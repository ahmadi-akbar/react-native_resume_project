import React, { PureComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import styles from "../styles";

export class HomeScreen extends PureComponent {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Todo")}
        >
          <Text>Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Temp")}
        >
          <Text>Temp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("SignIn")}
        >
          <Text>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("SignUp")}
        >
          <Text>SignUp</Text>
        </TouchableOpacity>
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
