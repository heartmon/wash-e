import React, { Component } from "react";
import { View, FlatList, Text, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';

import { Environment } from '../components/Environment';
import { Menu, MenuPager } from "../components/Menu";
import { Nong } from '../components/Nong';
import { Container } from '../components/Container';
import { Program } from '../components/Program';
import { EventBox } from '../components/EventBox';
import { EnergyBubble, ClothesBubble, IconBubble, ChemicalBubble, TextBubble } from '../components/Bubble';

import { MENU_LEVEL, WASHING_STATE } from '../config/constant';

import { changeMenu } from '../actions/nav';

class Home extends Component {

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

  getBubbleTypeToDisplay = (washState) => {
    
  }

  render() {
    const { program, wmData } = this.props;
    const { step } = wmData;
    return (
      <Container> 
        <Environment style={{alignItems: 'flex-end', flexDirection: 'row'}}>
          <Program />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
            <View style={{marginBottom: 120}} >
              <Nong />   
              {/* Info Bubble */}
              {step == WASHING_STATE.CONFIG && <View style={{position: 'absolute', width: '100%'}}>
                <EnergyBubble {...this._getBubblePosition(0)} />
                {wmData.clothesWeight > 0 && <ClothesBubble weight={wmData.clothesWeight} maxWeight={8} {...this._getBubblePosition(1)} />}
                {false && <IconBubble
                  icon={require('../components/Bubble/images/bulb.png')}
                  {...this._getBubblePosition(3)}     
                />} 
                { false && <ChemicalBubble {...this._getBubblePosition(2)} />}
                { wmData.clothesWeight > 0 && program.data.key && <TextBubble icon={require('../components/Bubble/images/icon_wm.png')} text="Start washing" {...this._getBubblePosition(4)} />}
              </View>}
              {/* Washing Bubble */}
              {step === WASHING_STATE.WASHING && 
              <View style={{position: 'absolute', width: '100%'}}>
               
              </View>
              }
            </View>
          </View> 
          <EventBox /> 
        </Environment>
        <Menu />  
      </Container>  
    ); 
  }
}

const mapStateToProps = (state) => {
  const {wmData, program} = state;
  return {
    wmData,
    program
  }
}

export default connect(mapStateToProps)(Home);
