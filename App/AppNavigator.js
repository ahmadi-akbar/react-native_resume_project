import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";

const screens = createStackNavigator({
  Home: HomeScreen
});

export default createAppContainer(screens);
