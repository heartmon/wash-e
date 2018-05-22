import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: '$primaryNonSelect',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 8,
  },
  boxActive: {
    width: 90,
    height: 90,
    borderWidth: 10,
    borderColor: '#FBC400',
    borderStyle: 'solid',
    backgroundColor: '$primary',
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 35,
  },
  title: {
    color: '$primaryNonSelect',
    fontSize: 22,
  },
  titleActive: {
    color: '$primary',
    fontSize: 25,
  },
  icon: {
    width: '80%'
  }
});

const CustomMenuItem = ({active, step, title, customData, onPress}) => {
  let icon, selectedTitle;
  if (customData && customData.push && customData.length > 1) {
    icon = require('../Program/images/icon_mixed.png')
    selectedTitle = 'Mixed';
  } else if (customData && customData.push && customData.length === 1) {
    icon = customData[0].icon;
    selectedTitle = customData[0].title;
  } else if (customData) {
    icon = customData.icon;
    selectedTitle = customData.title;
  }
  
  return ( 
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.box, active && styles.boxActive]}>
        {
          icon 
          ? <Image style={styles.icon} resizeMode="contain" source={icon} />
          : <Text style={styles.text}>{step}</Text>
        }
      </View> 
      <Text style={[styles.title, active && styles.titleActive]}>{selectedTitle ? selectedTitle : title}</Text>
    </TouchableOpacity>
  )
}

export default CustomMenuItem;
