import React, { Component } from 'react';
import { Image, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';

import textConstants from '../utils/textConstants';

import styles from '../styles/style';
import signUpStyles from '../styles/signUpStyles';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      block: '',
      company: '',
      flat: '',
      name: '',
      phone: '',
      vehicle: '',
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    console.log('get all details to sign up', this.state);
  }

  render() {
    return (
      <View>
        <View style={styles.headerBand}>
          <Image source={require('../img/apartment.png')} style={{height: 20}} />
          <Text style={styles.bold}>{textConstants.banner}</Text>
        </View>
        <View style={signUpStyles.signUpForm}>
          <TextInput
            onChangeText={(text) => this.setState({ name: text })}
            placeholder={textConstants.namePlaceholder}
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ phone: text })}
            keyboardType="phone-pad"
            placeholder={textConstants.phoneNumberPlaceholder}
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ block: text })}
            placeholder={textConstants.blockPlaceholder}
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ flat: text })}
            keyboardType="numeric"
            placeholder={textConstants.flatPlaceholder}
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType="email-address"
            placeholder={textConstants.emailPlaceholder}
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ vehicle: text })}
            placeholder={textConstants.vehiclePlaceholder}
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({ company: text })}
            placeholder={textConstants.companyPlaceholder}
            style={styles.textInput}
          />
          <Button primary raised text={textConstants.signUp} onPress={this.signUp}upperCase={false} />
        </View>
        <View style={styles.topSpacer}>
          <Button
            text={textConstants.signIn}
            onPress={() => this.props.navigation.navigate('SignIn')}
            upperCase={false}
          />
        </View>
      </View>
    );
  }
}
