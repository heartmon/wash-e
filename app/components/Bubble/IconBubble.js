import React from 'react';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const IconBubble = ({
  icon,
  style, 
  position,
  side,
  onPress,
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
    top = 20;
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
    top -= 50; 
    posStyle.right = -distance - 30;
    imageSource = require('./images/icon_bubble_right.png');
  break;
}

  return ( 
    <TouchableOpacity onPress={onPress} style={[posStyle, style]}>
      <ImageBackground 
        resizeMode="contain" 
        style={[styles.iconBubble]} 
        source={imageSource}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -24}}>
          <Image source={icon} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default IconBubble;
