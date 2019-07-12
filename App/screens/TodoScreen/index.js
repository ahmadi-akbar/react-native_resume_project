import React, { PureComponent } from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  TextInput,
  ActivityIndicator
} from "react-native";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import TodoCard from "../../components/TodoCard";
import styles from "./styles";

export class TodoScreen extends PureComponent {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("todos");
    this.unsubscribe = null;
    this.state = {
      current: "",
      jobs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }
  
  onCollectionUpdate = querySnapshot => {
    const todos = [];
    querySnapshot.forEach(doc => {
      const { title, complete } = doc.data();
      todos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        complete
      });
    });
    console.tron.log("todo : ", todos);
    this.setState({
      jobs: todos,
      loading: false
    });
  };

  render() {
    let { jobs, loading } = this.state;
    console.tron.log("state : ", this.state);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>List of Jobs</Text>
        </View>
        <FlatList
          data={jobs}
          renderItem={({ item }) => <TodoCard item={item} />}
        />
        {loading && <ActivityIndicator color="pink" size="large" />}
        <TextInput
          placeholder="type to add"
          value={this.state.current}
          onChangeText={text => this.setState({ current: text })}
        />
        <TouchableOpacity style={styles.button} onPress={this._addJob}>
          <Text>Add Job</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _addJob = () => {
    let { jobs, current } = this.state;
    console.tron.log("jobs : ", this.state);
    this.ref
      .add({
        title: current,
        complete: false
      })
      .then(value => console.tron.log("add :", value))
      .catch(e => console.tron.log("e : ", e));
    // this.setState({ jobs: [temp, ...jobs], current: "" });
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoScreen);
