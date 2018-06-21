import React, { Component } from 'react';
import { Image, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';

import styles from '../styles/style';
import signUpStyles from '../styles/signUpStyles';
import signinStyles from '../styles/signInStyles';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      vehicle: '',
      company: '',
      flat: '',
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    console.log('get all details to sign up', this.state);
  }

  render() {
    return (
      <View>
        <View style={signUpStyles.signUpHeader}>
          <Image source={require('../img/apartment.png')} style={{height: 20}} />
          <Text style={signUpStyles.tagline}>APNA MAHALLA</Text>
        </View>
        <View style={signUpStyles.signUpForm}>
          <TextInput
            onChangeText={(text) => this.setState({ name: text })}
            placeholder="Enter name"
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ vehicle: text })}
            placeholder="Enter vehicle number"
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ company: text })}
            placeholder="Enter Company Details"
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ flat: text })}
            placeholder="Enter Flat Details"
            style={styles.textInput}
          />
          <Button primary raised text="Sign Up" onPress={this.signUp}upperCase={false} />
        </View>
        <View style={signinStyles.signInAuthenticationActions}>
          <Button
            text="Sign In"
            onPress={() => this.props.navigation.navigate('SignIn')}
            upperCase={false}
          />
        </View>
      </View>
    );
  }
}
