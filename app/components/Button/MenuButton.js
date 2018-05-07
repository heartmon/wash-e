import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles';

const MenuButton = ({text, icon, onPress, selected, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <View style={[styles.button, selected && {backgroundColor: styles.$backgroundSelected}]}>
          <Image source={icon} />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MenuButton;
