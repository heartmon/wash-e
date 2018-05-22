import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, FlatList, TouchableOpacity, Switch } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';


import { EnergyBubble, ClothesBubble, IconBubble, ChemicalBubble, TextBubble } from './index';
import { WASHING_STATE, MENU_LEVEL } from '../../config/constant';

class BubbleContainer extends Component {

  isShowEnergy = () => {
    const { program } = this.props;
    const { selected, custom } = program;
 
    return selected !== '';
  }

  isShowTip = () => {
    const { nav } = this.props;
    return nav.menu !== MENU_LEVEL.HOME;
  } 

  isShowHeart = () => {
    const { wmData } = this.props;
    return wmData.sick; 
  }

  isShowClothes = () => {
    const { wmData } = this.props;
    return !this.isShowHeart() && wmData.clothesWeight > 0;
  }

  isShowChemical = () => {
    const { program, wmData } = this.props;
    const { selected, custom } = program;
    return this.isShowClothes() && this.isShowEnergy();
  }

  isShowStartWashing = () => {
    return true;
  }
   
  _getBubblePosition = (posIndex) => { 
    let position, side;
    switch(posIndex) {
      case 0:
        position = 'top';
        side = 'left';
      break;
      case 1:
        position = 'top';
        side = 'right';
      break; 
      case 2:
        position = 'center';
        side = 'right';
      break;
      case 3:
        position = 'center';
        side = 'left';
      break;
      case 4:
        position = 'bottom';
        side = 'right';
      break;
      case 5:
        position = 'bottom';
        side = 'left';
      break;
    }
    
    return {position, side};
  }

  render() {
    const { program, wmData, 
      onTipClick, 
      onClothesClick, 
      onChemicalClick, 
      onHeartClick 
    } = this.props;
    const { step } = wmData;
 
    return (
      step == WASHING_STATE.CONFIG && <View style={{position: 'absolute', width: '100%'}}>
        {this.isShowEnergy() && <EnergyBubble {...this._getBubblePosition(0)} />}
        {this.isShowClothes() && 
          <ClothesBubble 
            weight={wmData.clothesWeight} 
            maxWeight={8} {...this._getBubblePosition(1)}
            onPress={onClothesClick}
          />
        }
        {this.isShowTip() && <IconBubble
          onPress={onTipClick}
          icon={require('../../components/Bubble/images/bulb.png')}
          {...this._getBubblePosition(3)}     
        />}  
        { 
          this.isShowHeart() && 
          <IconBubble
          onPress={onHeartClick}
          icon={require('../../components/Bubble/images/icon_heart.png')}
          {...this._getBubblePosition(1)}     
          />
        }  
        { 
          this.isShowChemical() && 
          <IconBubble 
            icon={require('../../components/Bubble/images/detergent.png')} 
            onPress={onChemicalClick} 
            {...this._getBubblePosition(2)} 
          />
        }
        { wmData.clothesWeight > 0 && program.data.key && <TextBubble icon={require('../../components/Bubble/images/icon_wm.png')} text="Start washing" {...this._getBubblePosition(4)} />}
      </View>
    );
  } 
}

const mapStateToProps = (state) => {
  const {wmData, program, nav} = state;

  return {
    wmData,
    program,
    nav
  }
}

export default connect(mapStateToProps)(BubbleContainer);
