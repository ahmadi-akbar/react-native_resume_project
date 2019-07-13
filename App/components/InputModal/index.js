import React, { PureComponent } from "react";
import { Text, View, TextInput } from "react-native";
import { createAnimatableComponent } from "react-native-animatable";
import CustomButton from "../CustomButton";
import styles from "./styles";
const AnimatableView = createAnimatableComponent(View);
export default class CustomModal extends PureComponent {
  state = {
    current: ""
  };
  render() {
    const { posCall, negCall, title, pos, neg } = this.props;
    const { current } = this.state;
    return (
      <View style={styles.container}>
        <AnimatableView
          animation="fadeInRight"
          duration={1000}
          useNativeDriver
          style={styles.modal}
        >
          <Text style={styles.title}>{title}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type here"
            value={current}
            onChangeText={text => this.setState({ current: text })}
          />
          <View style={styles.row}>
            <CustomButton
              title={pos}
              onPress={posCall}
              style={styles.button}
              textStyle={styles.text}
            />
            <CustomButton
              title={neg}
              onPress={() => negCall(current)}
              style={[{ backgroundColor: "#1E88E5" }, styles.button]}
              textStyle={styles.text}
            />
          </View>
        </AnimatableView>
      </View>
    );
  }
}
