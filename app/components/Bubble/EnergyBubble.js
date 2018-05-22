import React from 'react';
import { View, ImageBackground, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import styles from './styles';

const EnergyBubble = ({
    water, 
    energy, 
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
  // let offset = 20;
  let offset = 0;
  let distance = styles._energyBubble.width + offset;

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
      imageSource = require('./images/energy_bubble_left.png');
    break;
    case 'right':
      posStyle.right = -distance;
      imageSource = require('./images/energy_bubble_right.png');
    break;
  }

  const waterColor = '#84DBFF';
  const energyColor = '#FFD83B';
  const indicatorStyle = {
    position: 'absolute',
    top: -18, 
    zIndex: 3, 
    transform: [
      {rotateX: '180deg'}
    ] 
  };

  return (
    <TouchableOpacity style={[posStyle, style]}>
      <ImageBackground
        resizeMode="contain" 
        style={[styles.energyBubble]} 
        source={imageSource}>
        <View style={styles.consumptionContainer}>
          <View style={styles.consumptionIcon} >
            <Image source={require('./images/water.png')} />
          </View>
          <View style={styles.barContainer}>
            <View style={styles.bar}></View>
            <View style={[styles.barValue, {backgroundColor: waterColor}]}></View>
            <SvgUri
              style={{...indicatorStyle, left: 20}} 
              fill={waterColor}
              source={require('./images/indicator.svg')}
            />
          </View>
        </View> 
        <View style={styles.consumptionContainer}>
          <View style={styles.consumptionIcon} >
            <Image source={require('./images/energy.png')} />
          </View>
          <View style={styles.barContainer}> 
            <View style={styles.bar}></View>
            <View style={[styles.barValue, {backgroundColor: energyColor}]}></View> 
            <SvgUri
              style={{...indicatorStyle, left: 20}} 
              fill={energyColor}
              source={require('./images/indicator.svg')}
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default EnergyBubble;
 