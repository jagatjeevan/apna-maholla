import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from '../styles/style';

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the About us page</Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}
