import React, { Component } from "react";
import { View, FlatList, Text, Image, ScrollView, TouchableOpacity, ViewPagerAndroid } from 'react-native';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import PopupDialog, { ScaleAnimation, DialogButton } from 'react-native-popup-dialog';

import { Environment } from '../components/Environment';
import { Menu, MenuPager } from "../components/Menu";
import { Nong } from '../components/Nong';
import { Container } from '../components/Container';
import { Program } from '../components/Program';
import { EventBox } from '../components/EventBox';
import { EnergyBubble, ClothesBubble, IconBubble, ChemicalBubble, TextBubble, BubbleContainer } from '../components/Bubble';

import {
  SickDialog,
  ClothesDialog,
  TipDialog,
  ChemicalDialog,
} from '../components/Dialog';

import { MENU_LEVEL, WASHING_STATE } from '../config/constant';

import { changeMenu } from '../actions/nav';

const scaleAnimation = new ScaleAnimation();

class Home extends Component {

  handleTipClick = () => {
    this.tipDialog.show();
  }

  handleClothesClick = () => {
    this.clothesDialog.show();
  }

  handleChemicalClick = () => {
    this.chemicalDialog.show();
  }
  
  handleDialogDismiss = (name) => {
    if (this[name]) {
      this[name].dismiss();
    }
  }

  handleHeartClick = () => {
    this.sickDialog.show();
  }
 
  render() {
    const { program, wmData } = this.props;
    const { step } = wmData;
    return (
      <Container>   
        <Environment style={{alignItems: 'flex-end', flexDirection: 'row'}}>
          <Program />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
            <View style={{marginBottom: 100}} >
              <Nong />
              <BubbleContainer
                onTipClick={this.handleTipClick}
                onClothesClick={this.handleClothesClick}
                onChemicalClick={this.handleChemicalClick}
                onHeartClick={this.handleHeartClick}
              /> 
            </View>
          </View> 
          <EventBox /> 
        </Environment>
        <Menu />  
        <TipDialog setRef={(ref) => this.tipDialog = ref} onDismiss={this.handleDialogDismiss} />
        <ClothesDialog setRef={(ref) => this.clothesDialog = ref} onDismiss={this.handleDialogDismiss} />
        <ChemicalDialog setRef={(ref) => this.chemicalDialog = ref} onDismiss={this.handleDialogDismiss} />
        <SickDialog icon={require('../components/Bubble/images/icon_heart.png')} text="Machine drum is broken" setRef={(ref) => this.sickDialog = ref} onDismiss={this.handleDialogDismiss} />
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
