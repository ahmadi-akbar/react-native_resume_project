import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import CustomModal from "../components/CustomModal";

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
        <CustomModal
          title="Are you sure?"
          pos="Yes remove it"
          neg="No cancel it"
          negCall={() => goBack()}
        />
      </View>
    );
  }
}
