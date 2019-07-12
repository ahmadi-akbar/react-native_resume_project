import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import TempScreen from "./screens/TempScreen";
import TodoScreen from "./screens/TodoScreen";

const screens = createStackNavigator({
  Home: HomeScreen,
  Temp: TempScreen,
  Todo: {
    screen: TodoScreen,
    navigationOptions: { header: null }
  }
});

export default createAppContainer(screens);
