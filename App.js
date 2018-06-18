import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-material-ui';

import Routes from './src/routes';

import { configureStore } from './src/reduxStore';
import { materialUITheme } from './src/styles/styleConstants';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={materialUITheme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    );
  }
}
