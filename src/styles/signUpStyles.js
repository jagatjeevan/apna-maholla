import { StyleSheet } from 'react-native';

import styleConstants from './styleConstants';

const signInStyles = StyleSheet.create({
  signUpContainer: {
  },
  signUpHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#dedede',
  },
  tagline: {
    fontWeight: 'bold',
  },
  signUpForm: {
    paddingLeft: 50,
    paddingRight: 50,
  }
});

export default signInStyles;
