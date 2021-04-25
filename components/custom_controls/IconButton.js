import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { icons } from './icons';
import PropTypes from 'prop-types';

// button icon (img) with a Touchable background
// how should the icon fill the container w/ appropriate aspect ratio? 
// aspect ratio depends from icon to icon, so must be externally defined

export const IconButton = (props) => {
  IconButton.propTypes = {
    source: PropTypes.string.isRequired,
  };

  return (
    <TouchableOpacity activeOpacity={0.5} 
      style={props.containerStyle} 
      onPress={props.onPress}>
      <Image source={icons[props.source]} style={styles.imageIcon}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageIcon: {  // image does some automatic resizing, need to specify fill
    height: '100%',  // fill entire parent
    width: '100%',  // fill entire parent
    backgroundColor: 'transparent'
  }
});