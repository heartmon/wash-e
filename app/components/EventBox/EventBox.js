import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';

import { changeClothesWeight, startWash, 
  shortcutFinish, 
  machineGetSick,
  machineBackToNormal
} from '../../actions/wm_data';
import { changeMenu } from '../../actions/nav';

import { WASHING_STATE } from '../../config/constant';
// import RNPopoverMenu from 'react-native-popover-menu';
// import Icon from 'react-native-vector-icons'
// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';

class EventBox extends Component {
  toggleHighlight = () => {

  }

  deleteLogItem = () => {  

  }

  handleClothesWeightChange = (weight) => {
    this.props.dispatch(changeClothesWeight(this.props.wmData.clothesWeight + weight));
  }

  handleStartWash = () => {
    console.log('start wash!');
    const { dispatch, program } = this.props;
    // check able to start

    // change menu
    dispatch(changeMenu(WASHING_STATE.WASHING));

    // change 
    dispatch(startWash(program.data));
    
  }

  handleFinishWash = () => {
    console.log('finishing wash!');
    const { dispatch } = this.props;
 
    // call to event action
    dispatch(shortcutFinish());
  }

  handleToggleSick = () => {
    const { dispatch } = this.props;
    const { sick } = this.props.wmData;
    if (sick) {
      dispatch(machineBackToNormal());
    } else {
      dispatch(machineGetSick());
    }
  }

 
  render() {     
    const { currentScore } = this.props.program;
    return (    
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item buttonColor='#9b59b6' title="Add clothes +2kg" onPress={() => this.handleClothesWeightChange(2) }>
          <Text>AC</Text>      
        </ActionButton.Item>       
        <ActionButton.Item buttonColor='#3498db' title="Remove clothes -2kg" onPress={() => this.handleClothesWeightChange(-2) }>
          <Text>RC</Text>      
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="Start washing" onPress={() => this.handleStartWash()}>
          <Text>ST</Text>      
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="Finish washing (Timer to 5 sec)" onPress={() => this.handleFinishWash()}>
          <Text>FN</Text>      
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#900022' title="Toggle Sick" onPress={() => this.handleToggleSick()}>
          <Text>TS</Text>
        </ActionButton.Item>
        <ActionButton.Item title="Score">
          <Text>{currentScore}</Text>
        </ActionButton.Item>
      </ActionButton>
    )
  }
}

const mapStateToProps = (state) => {
  const { wmData, program } = state;
  return { wmData, program };
}

export default connect(mapStateToProps)(EventBox);
