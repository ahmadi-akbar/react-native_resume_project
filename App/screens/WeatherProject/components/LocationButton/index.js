import React, { Component } from "react";
import {
  Text,
  TouchableHighlight,
  View,
  PermissionsAndroid
} from "react-native";
import geolocation from "@react-native-community/geolocation";
import styles from "./style";

export default class LocationButton extends Component {
  _onPress = async () => {
    await this.requestGPSPermission();
    const { onGetCoordsFun } = this.props;
    geolocation.getCurrentPosition(
      pos => {
        console.log("position : ", pos);
        onGetCoordsFun(pos.coords.latitude, pos.coords.longitude);
      },
      err => {
        console.log("err : ", err);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  requestGPSPermission = async () => {
    console.log("permission request ");
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message: "Cool Photo App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("we can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onPress}>
        <View style={styles.button}>
          <Text style={{ color: "#911" }}>Use Current Location</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
