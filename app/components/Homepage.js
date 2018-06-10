import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/style';

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      test: true
    };
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
