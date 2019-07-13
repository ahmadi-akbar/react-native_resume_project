import React, { PureComponent } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from "./styles";

export default class TodoCard extends PureComponent {
  render() {
    const { title, complete, key, doc } = this.props.item;
    let icon = require("../../assets/img/undone.png");
    if (complete) icon = require("../../assets/img/done.png");

    return (
      <View style={styles.container}>
        <TouchableOpacity
          key={key}
          style={styles.card}
          onPress={() => doc.ref.update({ complete: !complete })}
        >
          <View style={{ flex: 1 }}>
            <Image source={icon} style={styles.image} />
          </View>
          <Text style={[styles.text, complete && styles.done]}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.deleteJob}>
          <Image
            source={require("../../assets/img/delete.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
