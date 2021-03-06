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
      error: ''
    };
    this.signInUser = this.signInUser.bind(this);
  }
  
  signInUser() {
    const { username, password } = this.state;
    if(username === 'admin' && password === 'admin') {
      this.props.navigation.navigate('Dashboard');
    } else {
      this.setState({ error: 'Either username or password is wrong' });
    }
  }
  
  render() {
    return (
      <View style={styles.flexContainer}>
        <View style={signinStyles.signInBanner}>
          <Text style={signinStyles.signInBannerText}>{textConstants.banner}</Text>
          <Image source={require('../img/apartment.png')} />
        </View>
        <KeyboardAvoidingView behavior="padding" enabled style={signinStyles.signInForm}>
          <Text style={styles.heading}>{textConstants.signIn}</Text>
          <Text style={styles.error}>{this.state.error}</Text>
          <View style={styles.width100} id="signin-form">
            <TextInput
              onChangeText={(text) => this.setState({ username: text, error: '' })}
              placeholder={textConstants.userNamePlaceholder}
              style={styles.textInput}
            />
            <TextInput
              onChangeText={(text) => this.setState({ password: text, error: '' })}
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
                <Button text={textConstants.forgotPassword} onPress={() => this.props.navigation.navigate('ForgotPassword')} upperCase={false} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
