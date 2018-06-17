import React from 'react';
import { Provider } from 'react-redux';

import Routes from './src/routes';

import { configureStore } from './src/reduxStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
