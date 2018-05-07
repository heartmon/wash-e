import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import styles from './styles';

const TextBubble = ({
  icon,
  text,
  onPress,
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
let distance = styles._chemicalBubble.width + offset;

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
    imageSource = require('./images/text_bubble.png');
  break;
  case 'right':
    posStyle.right = -distance;
    imageSource = require('./images/text_bubble.png');
  break;
}

  return (
    <TouchableOpacity style={[posStyle, style]}>
      <ImageBackground 
        resizeMode="contain"
        style={[styles.textBubble]}
        source={imageSource}
      >
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Image resizeMode="contain" style={{width: 40, marginRight: 8}} source={icon}/>
          <Text style={styles.textBubbleText}>{text}</Text>          
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TextBubble;
