import React, { PureComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
export default class TodoCard extends PureComponent {
  toggleComplete() {
    this.props.item.doc.ref.update({
      complete: !this.props.item.complete
    });
  }
  render() {
    const { title, complete, key } = this.props.item;
    return (
      <TouchableOpacity
        key={key}
        style={styles.card}
        onPress={() => this.toggleComplete()}
      >
        <Text style={{ flex: 4 }}>{title}</Text>
        {complete && <Text style={{ flex: 1 }}>Complete</Text>}
      </TouchableOpacity>
    );
  }
}
