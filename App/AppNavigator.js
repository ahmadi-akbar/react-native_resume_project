import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import TempScreen from "./screens/TempScreen";
import TodoScreen from "./screens/TodoScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ModalScreen from "./screens/ModalScreen";

const screens = createStackNavigator({
  Home: HomeScreen,
  Modal: {
    screen: ModalScreen,
    navigationOptions: { header: null }
  },
  Temp: TempScreen,
  Todo: {
    screen: TodoScreen,
    navigationOptions: { header: null }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: { header: null }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: { header: null }
  }
});

export default createAppContainer(screens);
