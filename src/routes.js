import { createStackNavigator } from "react-navigation";

import Dashboard from "./components/Dashboard";
import About from "./components/About";

const Routes = createStackNavigator({
  Dashboard: { screen: Dashboard },
  About: { screen: About },
}, {
  initialRouteName: 'Dashboard',
  headerMode: 'none',
});

export default Routes;
