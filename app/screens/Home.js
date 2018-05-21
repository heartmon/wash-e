import React, { Component } from "react";
import { View, FlatList, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
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
            <View style={{marginBottom: 120}} >
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
        <SickDialog text="Machine drum is broken" setRef={(ref) => this.sickDialog = ref} onDismiss={this.handleDialogDismiss} />
      </Container>  
    );  
  }
}

const dialogStyles = {
  close: {
    alignItems: 'center', width: 48, height: 48, position: 'absolute', right: 0, top: 0,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 35, color: '#454545',
    marginLeft: 16,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  }
}

const TipDialog = ({setRef, onDismiss}) => (
  <PopupDialog
    width={0.6}
    height={400}
    ref={setRef}
    dialogAnimation={scaleAnimation}
    dialogStyle={{ borderRadius: 20 }} 
  >
    <View style={{borderColor: '#BDBDBD', borderStyle: 'solid', borderRadius: 20, borderWidth: 10, flex: 1, height: '100%'}}>
      <TouchableOpacity style={dialogStyles.close} onPress={() => onDismiss('tipDialog')}>
        <Image source={require('../components/Dialog/images/icon_close.png')} />
      </TouchableOpacity>
      <View style={dialogStyles.header}>  
        <Image style={{width: 50}} resizeMode="contain" source={require('../components/Bubble/images/bulb.png')} /> 
        <Text style={dialogStyles.title}>Get Blacker Blacks, Darker Darks</Text>
      </View>
      <View style={dialogStyles.content}>
        <Image source={require('../components/Dialog/images/tip_content.png')} /> 
      </View>
    </View>
  </PopupDialog>
)

const ClothesDialog = ({setRef, onDismiss}) => (
  <PopupDialog
    width={0.6}
    height={400}
    ref={setRef}
    dialogAnimation={scaleAnimation}
    dialogStyle={{ borderRadius: 20 }} 
  >
    <View style={{borderColor: '#BDBDBD', borderStyle: 'solid', borderRadius: 20, borderWidth: 10, flex: 1, height: '100%'}}>
      <TouchableOpacity style={dialogStyles.close} onPress={() => onDismiss('tipDialog')}>
        <Image source={require('../components/Dialog/images/icon_close.png')} />
      </TouchableOpacity>
      <View style={dialogStyles.header}>  
        {/* <Image style={{width: 50}} resizeMode="contain" source={require('../components/Bubble/images/bulb.png')} />  */}
        <Text style={dialogStyles.title}>Less clothes, same resource</Text>
      </View>
      <View style={dialogStyles.content}>
        <Image source={require('../components/Dialog/images/clothes_content.png')} /> 
      </View>
    </View>
  </PopupDialog>
)

const ChemicalDialog = ({setRef, onDismiss}) => (
  <PopupDialog
    width={0.6}
    height={400}
    ref={setRef}
    dialogAnimation={scaleAnimation}
    dialogStyle={{ borderRadius: 20 }} 
  >
    <View style={{borderColor: '#BDBDBD', borderStyle: 'solid', borderRadius: 20, borderWidth: 10, flex: 1, height: '100%'}}>
      <TouchableOpacity style={dialogStyles.close} onPress={() => onDismiss('tipDialog')}>
        <Image source={require('../components/Dialog/images/icon_close.png')} />
      </TouchableOpacity>
      <View style={dialogStyles.header}>  
        <Image style={{width: 50}} resizeMode="contain" source={require('../components/Bubble/images/bulb.png')} /> 
        <Text style={dialogStyles.title}>Chemical Measurement</Text>
      </View>
      <View style={dialogStyles.content}>
        {/* <Image source={require('../components/Dialog/images/tip_content.png')} />  */}
      </View>
    </View>
  </PopupDialog>
)

const SickDialog = ({setRef, text, onDismiss}) => (
  <PopupDialog
    width={0.6}
    height={400}
    ref={setRef}
    dialogAnimation={scaleAnimation}
    dialogStyle={{ borderRadius: 20 }} 
  >
    <View style={{borderColor: '#BDBDBD', borderStyle: 'solid', borderRadius: 20, borderWidth: 10, flex: 1, height: '100%'}}>
      <TouchableOpacity style={dialogStyles.close} onPress={() => onDismiss('tipDialog')}>
        <Image source={require('../components/Dialog/images/icon_close.png')} />
      </TouchableOpacity>
      <View style={dialogStyles.content}>
        <Image />
        <Text>{text}</Text>
      </View>
    </View>
  </PopupDialog>
)

const mapStateToProps = (state) => {
  const {wmData, program} = state;
  return {
    wmData,
    program
  }
}

export default connect(mapStateToProps)(Home);
