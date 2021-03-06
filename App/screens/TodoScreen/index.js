import React, { PureComponent } from "react";
import { Text, FlatList, View, ActivityIndicator } from "react-native";
import fb from "react-native-firebase";
import { createAnimatableComponent } from "react-native-animatable";
import { connect } from "react-redux";
import TodoCard from "../../components/TodoCard";
import AddCard from "../../components/AddCard";
import CustomModal from "../../components/CustomModal";
import InputModal from "../../components/InputModal";
import styles from "./styles";

const AnimatableView = createAnimatableComponent(View);
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
        this.setState({
          isAuthenticated: true
        });
        this.db = fb.firestore().collection("todos." + data.user.uid);
        this.fireUnsubscribe = this.db.onSnapshot(this.onCollectionUpdate);
      });
    // .catch(e => {
    //   console.tron.log("e:", e);
    // });
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
    let empty = true;
    let { jobs, loading, isAuthenticated, confirm } = this.state;
    if (!isAuthenticated) jobs = [];
    console.tron.log("state :", this.state);
    if (jobs.length || loading) empty = false;
    return (
      <View style={styles.container}>
        {confirm && <View style={styles.overlay}>{confirm}</View>}
        <AnimatableView
          animation="slideInDown"
          duration={1500}
          useNativeDriver
          style={styles.header}
        >
          <Text style={styles.headerText}>List of Jobs</Text>
        </AnimatableView>
        {loading && <ActivityIndicator color="pink" size="large" />}
        {empty && <Text style={styles.empty}>You have not any task :(</Text>}
        <AnimatableView
          animation="fadeIn"
          delay={1500}
          duration={1500}
          useNativeDriver
          style={{ flex: 1 }}
        >
          <FlatList
            data={jobs}
            renderItem={({ item }) => (
              <TodoCard item={item} deleteJob={() => this.deleteJob(item)} />
            )}
          />
        </AnimatableView>
        <AnimatableView animation="slideInUp" duration={1500} useNativeDriver>
          <AddCard title="New todo" onPress={this.addJob} />
        </AnimatableView>
      </View>
    );
  }
  deleteJob = item => {
    this.setState({
      confirm: (
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
      )
    });
  };

  addJob = () => {
    this.setState({
      confirm: (
        <InputModal
          title="Add new todo"
          pos="Cancel"
          posCall={() => {
            this.setState({ confirm: null });
          }}
          neg="Add"
          negCall={text => {
            if (text.trim() !== "") this.doAddJob(text);
            this.setState({ confirm: null });
          }}
        />
      )
    });
  };

  doAddJob = current => {
    let { jobs } = this.state;
    this.db.add({
      title: current,
      complete: false
    });
    // .then(data => console.tron.log("add :", data))
    // .catch(e => console.tron.log("e : ", e));
    jobs.push(current);
    this.setState({ jobs });
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoScreen);
