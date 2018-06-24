import { StyleSheet } from 'react-native';

import styleConstants from './styleConstants';

const signInStyles = StyleSheet.create({
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
    paddingLeft: styleConstants.padding,
    paddingRight: styleConstants.padding,
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
  },
});

export default signInStyles;
