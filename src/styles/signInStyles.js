import { StyleSheet } from 'react-native';

import styleConstants from './styleConstants';

const signInStyles = StyleSheet.create({
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
    justifyContent: 'center',
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  signInButton: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
  },
  signInAuthenticationActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 280,
  },
});

export default signInStyles;
