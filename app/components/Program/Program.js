import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, FlatList, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import CustomProgram from './CustomProgram';
import WashingProgram from './WashingProgram';
import ProgramItem from './ProgramItem';
import SummaryProgram from './SummaryProgram';

import { adjustProgram } from '../../actions/program';
import { MENU_LEVEL, WASHING_STATE } from '../../config/constant';

import { getTimeText } from '../../utils/common';

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false
    }
  }

  handleCheckboxPress = (key) => {
    const { data } = this.props.program;
    const val = data[key];   
    this.props.dispatch(adjustProgram(key, !val));
  }
   
  handlePress = () => {
    this.setState({hide: !this.state.hide});
  }

  isShowProgram = () => {
    const { program, step } = this.props;

    const menu = (menu !== MENU_LEVEL.HOME);
    const isSelectedProgram = (program.selected !== '');
    const stepCond = !(step == WASHING_STATE.START_WASHING || step == WASHING_STATE.FINISH_WASHING);
    // return menu !== MENU_LEVEL.HOME && program.selected !== '';

    return menu && isSelectedProgram && stepCond; 
  }

  render() {
    const { data, custom } = this.props.program;
    const { step } = this.props;

    const timeText = getTimeText(data.time);

    if (!this.isShowProgram() || !data) {
      return <View /> 
    }  
    else {
      let programScreen;
      if (step === WASHING_STATE.WASHING) { 
        programScreen = <WashingProgram />;
      } else if (step === WASHING_STATE.FINISH_WASHING) {
        programScreen = <View />;
      } else if (step === WASHING_STATE.SUMMARY) {
        programScreen = <SummaryProgram />;
      } else if (custom) {
        programScreen = <CustomProgram />;
      } else {
        programScreen = (
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>{data.title}</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('./images/icon_time.png')} style={styles.subtitleIcon} />
                <Text style={styles.subtitle}>{timeText}</Text>
              </View>
            </View>  
            <View style={styles.content}>
              <ProgramItem text="Temperature" icon="temperature" value={data.temperature} />
              <ProgramItem text="Spin Speed" icon="rpm" value={data.spin_speed} />
              <ProgramItem onPress={() => this.handleCheckboxPress('pre_wash')} text="Pre-wash" icon="pre_wash" checkbox={true} selected={data.pre_wash}  />
              <ProgramItem onPress={() => this.handleCheckboxPress('heavy_stain')} text="Heavy Stain" icon="heavy_stain" checkbox={true} selected={data.heavy_stain}  />
              <ProgramItem onPress={() => this.handleCheckboxPress('rapid')} text="Rapid" icon="rapid" selected={true} checkbox={true} selected={data.rapid}  />
            </View>
          </View>
        )
      }
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.handlePress()} style={styles.handle}>
            <Image resizeMode="contain" style={styles.handleArrow} source={require('./images/arrow_down.png')} />
          </TouchableOpacity>
          {!(this.state.hide) && 
            programScreen
          }
        </View>
      );
    }
  } 
}

const mapStateToProps = ({program, menu, wmData}) => {
  return {
    program, 
    step: wmData.step,
    // washState: wmData.washInfo.washState,
    // menu  
  }
};

export default connect(mapStateToProps)(Program);
