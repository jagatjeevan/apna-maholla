import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-material-ui';

import styles from '../styles/style';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.signUpUser = this.signUpUser.bind(this);
  }
  
  signUpUser() {
    console.log(this.state);
  }
  
  render() {
    return (
      <View style={styles.signInContainer}>
        <View style={styles.signInBanner}>
          <Text style={styles.signInBannerText}>HOME SWEET HOME</Text>
        </View>
        <View style={styles.signInForm}>
          <TextInput
            onChangeText={(text) => this.setState({ username: text })}
            placeholder="Enter username"
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ password: text })}
            placeholder="Enter passowrd"
            style={styles.textInput}
            secureTextEntry
          />
          <View style={styles.signInButton}>
          <Button primary raised text="Primary" onPress={this.signUpUser} />
          </View>
        </View>
      </View>
    )
  }
}
