import { createStackNavigator } from 'react-navigation';

import About from './components/About';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';

const Routes = createStackNavigator({
  About: { screen: About },
  Dashboard: { screen: Dashboard },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },
}, {
  initialRouteName: 'SignIn',
  headerMode: 'none',
});

export default Routes;
