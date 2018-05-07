import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import styles from './styles';

const ChemicalBubble = ({
  detergent,
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
    imageSource = require('./images/chemical_bubble_left.png');
  break;
  case 'right':
    posStyle.right = -distance;
    imageSource = require('./images/chemical_bubble_right.png');
  break;
}

const detergentColor = '#FF87A5';
const indicatorStyle = {
  position: 'absolute',
  top: -18, 
  zIndex: 3, 
  transform: [
    {rotateX: '180deg'}
  ] 
};
  
  return (
    <View style={[posStyle, style]}>
      <ImageBackground 
        resizeMode="contain" 
        style={[styles.chemicalBubble]}
        source={imageSource}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.consumptionContainer}>
            <View style={[styles.consumptionIcon, {width: 56}]} >
              <Image resizeMode="contain" style={{width: 56}} source={require('./images/detergent.png')}/>
            </View>
            <View style={styles.barContainer}> 
              <View style={styles.bar}></View>
              <View style={[styles.barValue, {backgroundColor: detergentColor}]}></View> 
              <SvgUri
                style={{...indicatorStyle, left: 20}} 
                fill={detergentColor}
                source={require('./images/indicator.svg')}
              />
              <View
                style={[{ 
                  height: 21,
                  width: 1,
                  borderWidth: 1,
                  borderStyle: 'dotted',
                  borderColor: detergentColor,
                  position: 'absolute',
                  top: -8, 
                  zIndex: 3,  
                }, {left: 24}]}
              >
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChemicalBubble;
