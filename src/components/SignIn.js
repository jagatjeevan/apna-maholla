import React, { Component } from 'react';
import { Image, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-material-ui';

import styles from '../styles/style';
import signinStyles from '../styles/signInStyles';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.signInUser = this.signInUser.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
  }
  
  signInUser() {
    console.log(this.state);
  }
  
  forgotPassword() {
    console.log('Proceed to forgot password');
  }

  render() {
    return (
      <View style={signinStyles.signInContainer}>
        <View style={signinStyles.signInBanner}>
          <Text style={signinStyles.signInBannerText}>APNA MAHALLA</Text>
          <Image source={require('../img/apartment.png')} />
        </View>
        <KeyboardAvoidingView behavior="padding" enabled style={signinStyles.signInForm}>
          <Text style={styles.heading}>Sign In</Text>
          <View style={styles.width100} id="signin-form">
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
            <View style={signinStyles.signInButton}>
              <Button primary raised text="Sign In" onPress={this.signInUser} upperCase={false} />
              <View style={signinStyles.signInAuthenticationActions}>
                <Button
                  text="Sign Up"
                  onPress={() => this.props.navigation.navigate('SignUp')}
                  upperCase={false}
                />
                <Button text="Forgot Password" onPress={this.forgotPassword} upperCase={false} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
