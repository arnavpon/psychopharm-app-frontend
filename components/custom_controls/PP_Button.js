// custom button: Text label on Touchable Opacity
// offers more styling options than standard RN button
// also, RN docs encourage applying app styles to custom components like this and utilizing these throughout the app to maintain consistency

// bold text label: boolean
// font color: defined by app style?
// background color: should this simply be defined by style of app?
// font size: where this defined?

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { COLOR_ACCENT, COLOR_DARK_BACKGROUND, FONT_TEXT, FONT_TEXT_BOLD } from '../../assets/styles/theme';

const PP_Button = (props) => {
  PP_Button.propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string
  };

  return (
    <TouchableOpacity style={[{'backgroundColor': props.backgroundColor}, styles.main]} onPress={props.onPress}>
      <Text style={styles.label}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_DARK_BACKGROUND
  },
  label: {
    fontSize: 60,
    alignSelf: 'center',
    color: COLOR_ACCENT,
    fontFamily: FONT_TEXT,
    backgroundColor: 'transparent'
  }
});

export default PP_Button;