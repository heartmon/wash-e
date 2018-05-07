import React from 'react';
import { View, Text } from 'react-native';

const MenuItem = ({text}) => (
  <View style={{flex: 1}}>
    <Text>{text}</Text>
  </View>
);

export default MenuItem;
