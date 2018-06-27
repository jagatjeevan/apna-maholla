import React, { Component } from 'react';
import { Image, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-material-ui';

import textConstants from '../utils/textConstants';

import styles from '../styles/style'

export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
    };
  }
  render() {
    return (
      <View>
        <View style={styles.headerBand}>
          <Image source={require('../img/apartment.png')} style={{ height: 20 }} />
          <Text style={styles.bold}>{textConstants.banner}</Text>
        </View>
        <View style={styles.appBodyContainer}>
          <Text style={styles.bold}>{textConstants.retrievePassword}</Text>
          <TextInput
            onChangeText={(text) => this.setState({ username: text })}
            placeholder={textConstants.userNamePlaceholder}
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ email: text })}
            placeholder={textConstants.emailPlaceholder}
            style={styles.textInput}
          />
        </View>
        <View style={styles.appBodyContainer}>
          <Button primary raised text={textConstants.retrievePassword} onPress={() => {}} upperCase={false} />
          <Button text={textConstants.signIn} onPress={() => this.props.navigation.navigate('SignIn')} upperCase={false} />
        </View>
      </View>
    );
  }
}
