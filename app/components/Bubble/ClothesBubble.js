import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import styles from './styles';

const ClothesBubble = ({
  weight, 
  maxWeight,
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
let distance = styles._clothesBubble.width + offset;

switch (position) {
  case 'top':
    top = -150;
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
    imageSource = require('./images/clothes_bubble_left.png');
  break;
  case 'right':
    posStyle.right = -distance;
    imageSource = require('./images/clothes_bubble_right.png');
  break;
}

const clothesIcon = {
  green: require('./images/clothes_green.png'),
  yellow: require('./images/clothes_yellow.png'),
  red: require('./images/clothes_red.png'),
};

const clothesColor = {
  green: '#27AE60',
  yellow: '#F2C94C',
  red: '#EB5757',
  tooMuch: '#EB5757',
}

const clothesText = {
  green: '#27AE60',
  yellow: '#F2C94C',
  red: 'More clothes please!',
}

let level = 'red';
if(weight < maxWeight / 2 || weight > maxWeight) {
  level = 'red';
} else if (weight >= maxWeight - 1 && weight <= maxWeight + 1) {
  level = 'green';
} else if (weight > maxWeight / 2) {
  level = 'yellow';
}

  return (
    <View style={[posStyle, style]}>
      <ImageBackground 
        resizeMode="contain"
        style={[styles.clothesBubble]}
        source={imageSource}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 54, marginRight: 16}}>
            <Image source={clothesIcon[level]}/>
          </View> 
          <Text style={[{fontWeight: 'bold', fontSize: 48, flex: 1, textAlign: 'center'}, {color: clothesColor[level]}]}>
            {weight}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 24, paddingHorizontal: 4, color: '#575757'}}>/</Text>
            <Text style={{fontSize: 36, paddingHorizontal: 4, color: '#575757'}}>{maxWeight}</Text>
            <Text style={{fontSize: 24, paddingHorizontal: 4, color: '#575757'}}>kg</Text>
          </View>
        </View>
        <Text style={{marginTop: 4, fontSize: 16, color: '#575757', alignSelf: 'center'}}>{clothesText[level]}</Text>
      </ImageBackground>
    </View>
  );
};

export default ClothesBubble;
