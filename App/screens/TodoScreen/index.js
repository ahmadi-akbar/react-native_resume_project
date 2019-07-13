import React, { PureComponent } from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  TextInput,
  ActivityIndicator
} from "react-native";
import fb from "react-native-firebase";
import { connect } from "react-redux";
import TodoCard from "../../components/TodoCard";
import CustomModal from "../../components/CustomModal";
import styles from "./styles";

export class TodoScreen extends PureComponent {
  constructor() {
    super();
    this.db = null;
    this.fireUnsubscribe = null;
    // this.authUnsubscribe = null;
    this.state = {
      current: "",
      jobs: [],
      loading: true,
      isAuthenticated: false,
      confirm: null
    };
  }

  componentDidMount() {
    // this.authUnsubscribe = fb.auth().onAuthStateChanged();
    fb.auth()
      .signInAnonymously()
      .then(data => {
        let { uid } = data.user;
        this.setState({
          isAuthenticated: true
        });
        this.db = fb.firestore().collection("todos." + uid);
        this.fireUnsubscribe = this.db.onSnapshot(this.onCollectionUpdate);
      })
      .catch(e => {
        console.tron.log("e:", e);
      });
  }

  componentWillUnmount() {
    if (this.fireUnsubscribe) this.fireUnsubscribe();
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
    this.setState({
      jobs: todos,
      loading: false
    });
  };

  render() {
    let { jobs, loading, isAuthenticated, confirm } = this.state;
    if (!isAuthenticated) jobs = null;

    return (
      <View style={styles.container}>
        {confirm}
        <View style={styles.header}>
          <Text style={styles.headerText}>List of Jobs</Text>
        </View>
        {loading && <ActivityIndicator color="pink" size="large" />}
        <FlatList
          data={jobs}
          renderItem={({ item }) => (
            <TodoCard item={item} deleteJob={() => this.deleteJob(item)} />
          )}
        />

        <TouchableOpacity style={styles.button} onPress={this._temp}>
          <Text>Add Job</Text>
        </TouchableOpacity>
      </View>
    );
  }
  deleteJob = item => {
    this.setState({
      confirm: (
        <View style={styles.overlay}>
          <CustomModal
            title="Are you sure?"
            pos="Yes remove it"
            posCall={() => {
              item.doc.ref.delete();
              this.setState({ confirm: null });
            }}
            neg="No cancel it"
            negCall={() => this.setState({ confirm: null })}
          />
        </View>
      )
    });
  };

  _addJob = () => {
    let { jobs, current } = this.state;
    this.db
      .add({
        title: current,
        complete: false
      })
      .then(data => console.tron.log("add :", data))
      .catch(e => console.tron.log("e : ", e));
    jobs.push(current);
    this.setState({ jobs: jobs, current: "" });
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoScreen);
