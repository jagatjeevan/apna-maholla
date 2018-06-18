import { StyleSheet } from 'react-native';

import styleConstants from './styleConstants';

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
  },
  signInBanner: {
    backgroundColor: styleConstants.teal500,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInBannerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 1.05 * styleConstants.fontSize,
  },
  signInForm: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  signInButton: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 10,
    width: 280,
  },
  authenticationActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 280,
  },
  heading: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 1.05 * styleConstants.fontSize,
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
