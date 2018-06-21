import { StyleSheet } from 'react-native';

import styleConstants from './styleConstants';

const styles = StyleSheet.create({
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
    width: '100%',
    height: 40,
  },
  width100: {
    width: '100%',
  }
});

export default styles;
