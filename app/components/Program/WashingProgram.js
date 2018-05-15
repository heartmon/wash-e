import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, FlatList, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import EStyleSheet from "react-native-extended-stylesheet";
import moment from 'moment';

import styles from './styles';

import ProgramItem from './ProgramItem';
import CustomProgramItem from './CustomProgramItem';

import { adjustProgram } from '../../actions/program';
import { timerCountdown } from '../../actions/wm_data';
import { MENU_LEVEL, WASHING_STATE } from '../../config/constant';

const compStyle = EStyleSheet.create({
  washingStateText: {
    fontSize: 40,
    color: '$primary',
  },
  timeText: {
    fontSize: 40,
    color: '$orange',
    fontWeight: 'bold',
  },
  remainingText: {
    fontSize: 20,

  }
});

class WashingProgram extends Component {
  interval;

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getTimeText = (sec_num) => {
    // var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
  }

  getFillPercentage = () => {

  }

  render() {
    const { data } = this.props.program;
    const { washInfo, step, dispatch } = this.props;
    
    console.log(washInfo);
    if (!this.interval && step === WASHING_STATE.WASHING) {
      this.interval = setInterval(() => {
        dispatch(timerCountdown());
      }, 1000) 
    } else if(this.interval && step !== WASHING_STATE.WASHING ) {
      clearInterval(this.interval);
      this.interval = null;
    } 

    return (
      <View style={[styles.content, {alignItems: 'center', paddingTop: 40, paddingBottom: 40,}]}>
        <AnimatedCircularProgress
          size={280}
          width={18}
          fill={20}
          rotation={0}
          tintColor="#01B1CB"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#E0E0E0">
          {
            (fill) => (
              <View style={{alignItems: 'center'}}> 
                <Text style={compStyle.washingStateText}>
                  Washing 
                </Text>
                <Text style={compStyle.timeText}>
                  {this.getTimeText(washInfo.currentTime)}
                </Text>
                <Text style={compStyle.remainingText}>
                  Remaining
                </Text>
              </View>
            )
          }
        </AnimatedCircularProgress>
      </View>
    );
  } 
}

const mapStateToProps = ({program, menu, wmData}) => {
  return {
    program, 
    step: wmData.step,
    // menu
    washInfo: wmData.washInfo,
  }
};

export default connect(mapStateToProps)(WashingProgram);
