import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import CustomButton from "../CustomButton";
import styles from "./styles";

export default class CustomModal extends PureComponent {
  state = {
    visible: true
  };
  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    const { posCall, negCall, title, pos, neg } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 3 }} />
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.row}>
            <CustomButton
              title={pos}
              onPress={posCall}
              style={styles.button}
              textStyle={styles.text}
            />
            <CustomButton
              title={neg}
              onPress={negCall}
              style={[{ backgroundColor: "#1E88E5" }, styles.button]}
              textStyle={styles.text}
            />
          </View>
        </View>
      </View>
    );
  }
}
