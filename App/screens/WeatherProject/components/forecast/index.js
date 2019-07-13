import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";

export default class Forecast extends Component {
  render() {
    console.log("forecast : ", this.props);
    const { main, description, temp, unit, icon } = this.props;
    return (
      <View style={{ height: 130, alignItems: "center" }}>
        <View style={styles.row}>
          <Text style={styles.bigText}>{main}</Text>
          <Image
            source={{ uri: icon }}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.mainText}>{description}</Text>
        <Text style={styles.bigText}>
          {temp}°{unit}
        </Text>
      </View>
    );
  }
}
