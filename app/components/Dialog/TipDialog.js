import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import PopupDialog, { ScaleAnimation } from 'react-native-popup-dialog';
import { IndicatorViewPager } from 'rn-viewpager';

import dialogStyles from './styles';

import PrevPageArrow from './PrevPageArrow';
import NextPageArrow from './NextPageArrow';

const scaleAnimation = new ScaleAnimation();

class TipDialog extends React.Component {
  page = 0;
  numberOfPage = 2;
  
  render() {
    const {setRef, onDismiss} = this.props;
    return (
      <PopupDialog
        width={0.6}
        height={400}
        ref={setRef}
        dialogAnimation={scaleAnimation}
        dialogStyle={{ borderRadius: 20 }} 
        onDismissed={() => {this.viewPager.setPage(0)}}
      >
        <View style={{borderColor: '#BDBDBD', borderStyle: 'solid', borderRadius: 20, borderWidth: 10, flex: 1, height: '100%'}}>
          <TouchableOpacity style={dialogStyles.close} onPress={() => onDismiss('tipDialog')}>
            <Image source={require('./images/icon_close.png')} />
          </TouchableOpacity>
          <View style={dialogStyles.header}>  
            <Image style={{width: 50}} resizeMode="contain" source={require('../Bubble/images/bulb.png')} /> 
            <Text style={dialogStyles.title}>Get Blacker Blacks, Darker Darks</Text>
          </View>
          <IndicatorViewPager  
              style={{flex: 1}}
              ref={viewPager => { this.viewPager = viewPager; }}
              onPageSelected={(e) => {this.page = e.position}} 
            > 
            <View style={dialogStyles.content}>
              <Image source={require('./images/tip_content.png')} /> 
            </View>
            <View style={dialogStyles.content}>
              <Text>Empty Content</Text>
            </View>
          </IndicatorViewPager>
          <PrevPageArrow style={dialogStyles.prevArrow} onPress={() => {const p = this.page - 1 < 0 ? this.numberOfPage - 1 : this.page - 1; this.viewPager.setPage(p)}} />
          <NextPageArrow style={dialogStyles.nextArrow} onPress={() => {const p = this.page + 1 > this.numberOfPage - 1 ? 0 : this.page + 1; this.viewPager.setPage(p)}} />
        </View>
      </PopupDialog>
    );
  }
}

export default TipDialog;
