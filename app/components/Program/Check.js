import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const uncheck = require('./images/uncheck.png');
const check = require('./images/check.png');

const Check = ({selected}) => {
  return (
    <Image resizeMode="contain" style={styles.check} source={selected ? check : uncheck} />
  );
}

export default Check;
