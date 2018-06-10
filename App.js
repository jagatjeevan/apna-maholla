import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import { configureStore } from './app/reduxStore';
import Homepage from './app/components/Homepage';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Homepage />
      </Provider>
    );
  }
}
