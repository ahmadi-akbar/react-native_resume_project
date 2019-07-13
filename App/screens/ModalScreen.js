import React, { Component } from "react";
import { View } from "react-native";
import InputModal from "../components/InputModal";

export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <InputModal
          title="Are ?"
          pos="Cancel"
          neg="Add"
          negCall={() => goBack()}
        />
      </View>
    );
  }
}
