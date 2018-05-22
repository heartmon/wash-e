import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import dialogStyles from './styles';

const PrevPageArrow = ({style, onPress}) => (
  <TouchableOpacity style={style} onPress={onPress} style={[style, {width: 60, height: 60}]}>
    <Image source={require('./images/arrow_left.png')} />
  </TouchableOpacity>
)

export default PrevPageArrow;
