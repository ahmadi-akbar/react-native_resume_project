import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import TempScreen from "./screens/TempScreen";
import TodoScreen from "./screens/TodoScreen";
import SignInScreen from './screens/SignInScreen'

const screens = createStackNavigator({
  Home: HomeScreen,
  Temp: TempScreen,
  Todo: {
    screen: TodoScreen,
    navigationOptions: { header: null }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: { header: null }
  }
});

export default createAppContainer(screens);
