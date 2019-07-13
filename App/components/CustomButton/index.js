import React, { PureComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class CustomButton extends PureComponent {
  render() {
    const { title, style, textStyle, onPress } = this.props;
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
