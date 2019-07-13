import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import TempScreen from "./screens/TempScreen";
import TodoScreen from "./screens/TodoScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ModalScreen from "./screens/ModalScreen";

const screens = createStackNavigator(
  {
    Home: HomeScreen,
    Modal: ModalScreen,
    Temp: TempScreen,
    Todo: TodoScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(screens);
