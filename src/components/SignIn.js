import React, { Component } from 'react';
import { Image, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-material-ui';

import textConstants from '../utils/textConstants';

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
          <Text style={signinStyles.signInBannerText}>{textConstants.banner}</Text>
          <Image source={require('../img/apartment.png')} />
        </View>
        <KeyboardAvoidingView behavior="padding" enabled style={signinStyles.signInForm}>
          <Text style={styles.heading}>{textConstants.signIn}</Text>
          <View style={styles.width100} id="signin-form">
            <TextInput
              onChangeText={(text) => this.setState({ username: text })}
              placeholder={textConstants.userNamePlaceholder}
              style={styles.textInput}
            />
            <TextInput
              onChangeText={(text) => this.setState({ password: text })}
              placeholder={textConstants.passwordPlaceholder}
              style={styles.textInput}
              secureTextEntry
            />
            <View style={signinStyles.signInButton}>
              <Button primary raised text={textConstants.signIn} onPress={this.signInUser} upperCase={false} />
              <View style={signinStyles.signInAuthenticationActions}>
                <Button
                  text={textConstants.signUp}
                  onPress={() => this.props.navigation.navigate('SignUp')}
                  upperCase={false}
                />
                <Button text={textConstants.forgotPassword} onPress={this.forgotPassword} upperCase={false} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
