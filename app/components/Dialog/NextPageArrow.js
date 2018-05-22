import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import dialogStyles from './styles';

const NextPageArrow = ({style, onPress}) => (
  <TouchableOpacity onPress={onPress} style={[style, {width: 60, height: 60}]}>
    <Image source={require('./images/arrow_right.png')} />
  </TouchableOpacity>
) 

export default NextPageArrow;
