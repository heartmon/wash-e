import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import PopupDialog, { ScaleAnimation } from 'react-native-popup-dialog';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import { connect } from 'react-redux';

import dialogStyles from './styles';

import PrevPageArrow from './PrevPageArrow';
import NextPageArrow from './NextPageArrow';

const scaleAnimation = new ScaleAnimation();

const chemicalDialogStyles = {
  measure: {
    flexDirection: 'row',
    marginBottom: 36,
  },
  measureText: {
    fontSize: 30,
    textAlign: 'right',
    width: 70,
    marginRight: 16,
    color: '#4F4F4F',
  },
  measureIcon: {
    width: 50,
    height: 50,
  },
  measureUnit: {
    fontSize: 20, 
    textAlign: 'right',
    width: 50,
    paddingTop: 8,
    color: '#4F4F4F',
  }
}

const clothesIcon = {
  green: require('./images/shirt_green.png'),
  yellow: require('./images/shirt_yellow.png'),
  red: require('./images/shirt_red.png'),
};

const clothesColor = {
  green: '#27AE60',
  yellow: '#F2C94C',
  red: '#EB5757',
  tooMuch: '#EB5757',
}

class ChemicalDialog extends React.Component {
  page = 0;
  numberOfPage = 2;

  render() {
    const { wmData, setRef, onDismiss } = this.props;
    const { clothesWeight, maxWeight } = wmData;
    
    let level = 'red';
    if(clothesWeight < maxWeight / 2 || clothesWeight > maxWeight) {
      level = 'red';
    } else if (clothesWeight >= maxWeight - 1 && clothesWeight <= maxWeight + 1) {
      level = 'green';
    } else if (clothesWeight > maxWeight / 2) {
      level = 'yellow';
    }

    // calculation of suggestion
    let scale = 50;
    let tbsp = 3;
    let cup = 0.2;
    
    return (
      <PopupDialog
        width={0.6}
        height={400}
        ref={setRef}
        dialogAnimation={scaleAnimation}
        dialogStyle={{ borderRadius: 20 }} 
        onDismissed={() => {this.viewPager.setPageWithoutAnimation(0)}}
      >
        <View style={{borderColor: '#BDBDBD', borderStyle: 'solid', borderRadius: 20, borderWidth: 10, flex: 1, height: '100%'}}>
          <TouchableOpacity style={dialogStyles.close} onPress={() => onDismiss('chemicalDialog')}>
            <Image source={require('./images/icon_close.png')} />
          </TouchableOpacity>
          <View style={dialogStyles.header}>  
            <Image style={{width: 80}} resizeMode="contain" source={require('../Bubble/images/detergent.png')} /> 
            <Text style={dialogStyles.title}>Chemical Measurement</Text>
          </View>
          <IndicatorViewPager  
            style={{flex: 1}}
            ref={viewPager => { this.viewPager = viewPager; }}
            onPageSelected={(e) => {this.page = e.position}} 
          > 
            <View style={[dialogStyles.content, {flexDirection: 'row'}]}>
              <View style={{marginRight: 48}}>
                <Image source={clothesIcon[level]} />
                <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginTop: 16,}}>
                  <Text style={[{fontSize: 50, fontWeight: '600', width: 50}, {color: clothesColor[level]}]}>{clothesWeight}</Text>
                  <Text style={{fontSize: 36, marginTop: -4}}>/</Text>
                  <Text style={{fontSize: 36, marginLeft: 8, marginTop: -4}}>{maxWeight}</Text>
                  <Text style={{fontSize: 24, marginLeft: 8, marginTop: -4}}>kg.</Text>
                </View>
              </View>
              <View style={{marginRight: 36}}>
                <Image source={require('./images/chemical_line.png')} />
              </View>
              <View style={{ justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 40 }}>
                <View style={chemicalDialogStyles.measure}>
                  <View style={chemicalDialogStyles.measureIcon}>
                    <Image source={require('./images/icon_scale.png')} />
                  </View>
                  <Text style={chemicalDialogStyles.measureText}>{scale}</Text>
                  <Text style={chemicalDialogStyles.measureUnit}>ml.</Text>
                </View>
                <View style={chemicalDialogStyles.measure}>
                  <View style={chemicalDialogStyles.measureIcon}>
                    <Image source={require('./images/icon_spoon.png')} />
                  </View>
                  <Text style={chemicalDialogStyles.measureText}>{tbsp}</Text>
                  <Text style={chemicalDialogStyles.measureUnit}>tbsp.</Text>
                </View>
                <View style={chemicalDialogStyles.measure}>
                  <View style={chemicalDialogStyles.measureIcon}>
                    <Image source={require('./images/icon_cup.png')} />
                  </View>
                  <Text style={chemicalDialogStyles.measureText}>{cup}</Text>
                  <Text style={chemicalDialogStyles.measureUnit}>cup</Text>
                </View>
              </View>
            </View>
            <View>
              <Text>Empty</Text>
            </View>  
          </IndicatorViewPager>
          <PrevPageArrow style={dialogStyles.prevArrow} onPress={() => {const p = this.page - 1 < 0 ? this.numberOfPage - 1 : this.page - 1; this.viewPager.setPage(p)}} />
          <NextPageArrow style={dialogStyles.nextArrow} onPress={() => {const p = this.page + 1 > this.numberOfPage - 1 ? 0 : this.page + 1; this.viewPager.setPage(p)}} />
        </View>
      </PopupDialog>
    )
  }
}

export default connect((state) => {
  const { wmData } = state;
  return {
    wmData
  }
})(ChemicalDialog);
