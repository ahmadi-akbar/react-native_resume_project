import React, { PureComponent } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from "./styles";

export default class AddCard extends PureComponent {
  render() {
    const { title, onPress, style } = this.props;
    let icon = require("../../assets/img/add.png");
    return (
      <View style={styles.contatiner}>
        <TouchableOpacity style={styles.content} onPress={onPress}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
