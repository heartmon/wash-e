import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import PopupDialog, { ScaleAnimation } from 'react-native-popup-dialog';

import dialogStyles from './styles';

const scaleAnimation = new ScaleAnimation();

const SickDialog = ({setRef, text, onDismiss, icon}) => (
  <PopupDialog
    width={0.6}
    height={400}
    ref={setRef}
    dialogAnimation={scaleAnimation} 
    dialogStyle={{ borderRadius: 20 }}  
  >
    <View style={{borderColor: '#BDBDBD', borderStyle: 'solid', borderRadius: 20, borderWidth: 10, flex: 1, height: '100%'}}>
      <TouchableOpacity style={dialogStyles.close} onPress={() => onDismiss('sickDialog')}>
        <Image source={require('./images/icon_close.png')} />
      </TouchableOpacity>
      <View style={[dialogStyles.content, {flexDirection: 'row', padding: 32, flex: 1}]}>
        <Image source={icon} />
        <Text style={{fontSize: 50, color: '#041E50', marginLeft: 32,}}>{text}</Text>
      </View>
    </View>
  </PopupDialog>
)

export default SickDialog;
