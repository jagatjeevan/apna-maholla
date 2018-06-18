import { StyleSheet } from 'react-native';

import styleConstants from './styleConstants';

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
  },
  signInBanner: {
    backgroundColor: '#00bfa5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInBannerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 1.05 * styleConstants.fontSize,
  },
  signInForm: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  signInButton: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: styleConstants.bodyBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: styleConstants.fontSize,
    width: 280,
    height: 40,
  },
});

export default styles;
