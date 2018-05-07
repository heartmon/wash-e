import React, { Component } from "react";
import { View, FlatList, Text, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';

import { Environment } from '../components/Environment';
import { Menu, MenuPager } from "../components/Menu";
import { Nong } from '../components/Nong';
import { Container } from '../components/Container';
import { Program } from '../components/Program';
import { EventBox } from '../components/EventBox';
import { EnergyBubble, ClothesBubble, IconBubble, ChemicalBubble, TextBubble } from '../components/Bubble';

import { MENU_LEVEL } from '../config/constant';

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

  render() {
    const { program } = this.props;
    return (
      <Container> 
        <Environment style={{alignItems: 'flex-end', flexDirection: 'row'}}>
          <Program />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
            <View style={{marginBottom: 120}} >
              <Nong />  
              <EnergyBubble {...this._getBubblePosition(0)} />
              <ClothesBubble {...this._getBubblePosition(1)} />
              <IconBubble
                icon={require('../components/Bubble/images/bulb.png')}
                {...this._getBubblePosition(3)}     
              /> 
              <ChemicalBubble {...this._getBubblePosition(2)} /> 
              <TextBubble icon={require('../components/Bubble/images/icon_wm.png')} text="Start washing" {...this._getBubblePosition(4)} /> 
            </View>
          </View> 
        </Environment>
        <Menu />  
        <EventBox /> 

      </Container>  
    ); 
  }
}

export default connect()(Home);
