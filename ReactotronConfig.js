import Reactotron from "reactotron-react-native";

console.disableYellowBox = true;
console.tron = Reactotron;
Reactotron.configure({ name: "New App", hostname: "localhost" }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
