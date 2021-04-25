import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { COLOR_TEXT_MAIN, FONT_TEXT } from '../../assets/styles/theme';

const LabeledInput = (props) => {
  LabeledInput.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} 
        placeholder={props.placeholder} />
      <Text style={styles.labelStyle}>{props.label}</Text>
    </View>
  );
};

// testing

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  inputStyle: {
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 2,
    textAlign: 'center',
    width: '25%'
  },
  labelStyle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontFamily: FONT_TEXT,
    color: COLOR_TEXT_MAIN
  }
});

export default LabeledInput;