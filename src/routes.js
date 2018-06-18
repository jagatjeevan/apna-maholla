import { createStackNavigator } from 'react-navigation';

import About from './components/About';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';

const Routes = createStackNavigator({
  About: { screen: About },
  Dashboard: { screen: Dashboard },
  SignIn: { screen: SignIn },
}, {
  initialRouteName: 'SignIn',
  headerMode: 'none',
});

export default Routes;
