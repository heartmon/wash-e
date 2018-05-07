import React from 'react';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const IconBubble = ({
  icon,
  style, 
  position,
  side,
}) => {

const posStyle = {
  position: 'absolute',
}
let imageSource;
let top = 0;
let left = 0;
let offset = 20;
let distance = styles._iconBubble.width + offset;

switch (position) {
  case 'top':
    top = -180;
  break;
  case 'center':
    top = 0;
  break;
  case 'bottom':
    top = 180;
  break;
}

posStyle.top = top;

switch (side) {
  case 'left':
    posStyle.left = -distance;
    imageSource = require('./images/icon_bubble_left.png');
  break;
  case 'right':
    posStyle.right = -distance;
    imageSource = require('./images/icon_bubble_right.png');
  break;
}

  return ( 
    <TouchableOpacity style={[posStyle, style]}>
      <ImageBackground 
        resizeMode="contain" 
        style={[styles.iconBubble]} 
        source={imageSource}>
        <View style={{flex: 1, alignItems: 'center', marginTop: 12}}>
          <Image source={icon} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default IconBubble;
