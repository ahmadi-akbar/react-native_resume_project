import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import { createAnimatableComponent } from "react-native-animatable";
import CustomButton from "../CustomButton";
import styles from "./styles";
const AnimatableView = createAnimatableComponent(View);
export default class CustomModal extends PureComponent {
  render() {
    const { posCall, negCall, title, pos, neg } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 3 }} />
        <AnimatableView
          animation="slideInUp"
          duration={1000}
          useNativeDriver
          View
          style={styles.modal}
        >
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
        </AnimatableView>
      </View>
    );
  }
}
