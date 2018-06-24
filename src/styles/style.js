import { StyleSheet } from 'react-native';

import styleConstants from './styleConstants';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flex: 1,
  },
  heading: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 1.05 * styleConstants.fontSize,
  },
  headerBand: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#dedede',
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
  },
  appBodyContainer: {
    paddingLeft: styleConstants.padding,
    paddingRight: styleConstants.padding
  },
  topSpacer: {
    marginTop: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  error: {
    color: '#f00',
  },
});

export default styles;
