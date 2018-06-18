import React, { Component } from 'react';
import { Image, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { Button, Divider } from 'react-native-material-ui';

import styles from '../styles/style';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.signInUser = this.signInUser.bind(this);
    this.signUpUser = this.signUpUser.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
  }
  
  signInUser() {
    console.log(this.state);
  }
  
  signUpUser() {
    console.log('navigate to sign up...');
  }

  forgotPassword() {
    console.log('Proceed to forgot password');
  }

  render() {
    return (
      <View style={styles.signInContainer}>
        <View style={styles.signInBanner}>
          <Text style={styles.signInBannerText}>APNA MAHALLA</Text>
          <Image source={require('../img/apartment.png')} />
        </View>
        <KeyboardAvoidingView behavior="padding" enabled style={styles.signInForm}>
          <Text style={styles.heading}>Sign In</Text>
          <Divider />
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
            <Button primary raised text="Sign In" onPress={this.signInUser} upperCase={false} />
            <View style={styles.authenticationActions}>
              <Button text="Sign Up" onPress={this.signUpUser} upperCase={false} />
              <Button text="Forgot Password" onPress={this.forgotPassword} upperCase={false} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
