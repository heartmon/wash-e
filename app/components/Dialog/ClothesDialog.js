import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import PopupDialog, { ScaleAnimation } from 'react-native-popup-dialog';

import dialogStyles from './styles';

const scaleAnimation = new ScaleAnimation();

const ClothesDialog = ({setRef, onDismiss}) => (
  <PopupDialog
    width={0.6}
    height={400}
    ref={setRef}
    dialogAnimation={scaleAnimation}
    dialogStyle={{ borderRadius: 20 }} 
  >
    <View style={{borderColor: '#BDBDBD', borderStyle: 'solid', borderRadius: 20, borderWidth: 10, flex: 1, height: '100%'}}>
      <TouchableOpacity style={dialogStyles.close} onPress={() => onDismiss('clothesDialog')}>
        <Image source={require('./images/icon_close.png')} />
      </TouchableOpacity>
      <View style={dialogStyles.header}>  
        <Text style={dialogStyles.title}>Less clothes, same resource</Text>
      </View>
      <View style={dialogStyles.content}>
        <Image source={require('./images/clothes_content.png')} /> 
      </View>
    </View>
  </PopupDialog>
)

export default ClothesDialog;
