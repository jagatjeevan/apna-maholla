import React from 'react';
import { Button, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from '../styles/style';

function mapStateToProps(state) {
  console.log('state', state);
  return {
    language: state.language.language,
  }
}

export class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Dashboard page</Text>
        <Text>{this.props.language}</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
