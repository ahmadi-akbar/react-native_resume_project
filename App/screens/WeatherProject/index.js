import React, { Component } from "react";
import { ImageBackground, Text, TextInput, View } from "react-native";
import FC from "./components/forecast";
import LocationButton from "./components/LocationButton";
import OWM from "./components/open_weather_map_API";
import styles from "./styles";

export default class WeatherProject extends Component {
  state = {
    granted: false,
    forecast: null,
    backGround: require("../../assets/img/back.jpg")
  };

  _handleTextChange = event => {
    let ct = event.nativeEvent.text;
    OWM.getForecastByCityName(ct).then(current => {
      this.setState({ forecast: current });
    });
  };

  _handleButton = (lat, lon) => {
    OWM.getForecastByCoords(lat, lon).then(current => {
      this.setState({ forecast: current });
    });
  };

  render() {
    let content = null;
    if (this.state.forecast) {
      const { main, description, temp, unit, icon } = this.state.forecast;
      content = (
        <FC
          main={main}
          description={description}
          temp={temp}
          unit={unit}
          icon={icon}
        />
      );
    }
    return (
      <View style={styles.container}>
        <ImageBackground
          source={this.state.backGround}
          resizeMode="cover"
          style={styles.imgBack}
        >
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>Current weather for</Text>
              <View>
                <TextInput
                  style={styles.input}
                  onSubmitEditing={this._handleTextChange}
                />
              </View>
            </View>
            <View style={[styles.row, { paddingTop: 10 }]}>
              <LocationButton onGetCoordsFun={this._handleButton} />
            </View>
            {content}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
