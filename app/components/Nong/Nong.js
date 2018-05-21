import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import lodash from 'lodash';

import styles from './styles';

import { changeMenu } from '../../actions/nav';
import { changeStepFromStartToWash, changeStepFromFinishToSummary } from '../../actions/wm_data';
import { updateScore } from '../../actions/program';
import { NONG_EMOTION, WASHING_STATE, MENU_LEVEL } from '../../config/constant';

const nongIcons = {};
nongIcons[NONG_EMOTION.GREETING] = require('./images/greet.gif');
nongIcons[NONG_EMOTION.BATH] = require('./images/bath.gif');
nongIcons[NONG_EMOTION.CRY] = require('./images/cry.gif');
nongIcons[NONG_EMOTION.DIE] = require('./images/die.gif');
nongIcons[NONG_EMOTION.FINISH] = require('./images/fin.gif');
nongIcons[NONG_EMOTION.FULL] = require('./images/full.png');
nongIcons[NONG_EMOTION.HELP] = require('./images/help.gif');
nongIcons[NONG_EMOTION.HUNGRY] = require('./images/hungry.png');
nongIcons[NONG_EMOTION.JUMP] = require('./images/jump.gif');
nongIcons[NONG_EMOTION.KNOCK] = require('./images/knock.gif');
nongIcons[NONG_EMOTION.LOVE_DOG] = require('./images/lovedog.gif');
nongIcons[NONG_EMOTION.MASK] = require('./images/mask.png');
nongIcons[NONG_EMOTION.MEH] = require('./images/soso.png');
nongIcons[NONG_EMOTION.MUTATE] = require('./images/mutate.png');
nongIcons[NONG_EMOTION.MUTATE_INSANE] = require('./images/mutate_psycho.png');
nongIcons[NONG_EMOTION.MUTATE_POOR] = require('./images/mutate_poor.png');
nongIcons[NONG_EMOTION.PLANT] = require('./images/plant.gif');
nongIcons[NONG_EMOTION.POINT] = require('./images/point.gif');
nongIcons[NONG_EMOTION.SICK] = require('./images/sick.gif');
nongIcons[NONG_EMOTION.SOMETHING] = require('./images/something.png');
nongIcons[NONG_EMOTION.START] = require('./images/start.gif');
nongIcons[NONG_EMOTION.STOP] = require('./images/stop.png');
nongIcons[NONG_EMOTION.TALK_TO_THE_HAND] = require('./images/talktothehand.png');
nongIcons[NONG_EMOTION.THINKING] = require('./images/isthinking.png');
nongIcons[NONG_EMOTION.TOO_FULL] = require('./images/toomuch.png');
nongIcons[NONG_EMOTION.WAVE] = require('./images/wave.gif');

class Nong extends Component {
  hungry = false;
  clothesWeight = 0;
  persistEmotion;
  programData = {};
  nextEmotion;

  constructor(props) {
    super(props);
    this.state = {
      current: '',
      hungry: false,
    };
  }
  
  getNongLevel = () => {
    const { scoreChange, currentScore } = this.props;
    const predictScore = scoreChange + currentScore;

    // let level = NONG_EMOTION.
    
    // also add the dependent on direction (INC or DEC)

    if (predictScore >= 91) {
      level = NONG_EMOTION.JUMP;
    } else if (predictScore >= 81 && predictScore <= 90) {
      level = NONG_EMOTION.PLANT;
    } else if (predictScore >= 61 && predictScore <= 80) {
      level = NONG_EMOTION.WAVE;
    } else if (predictScore >= 41 && predictScore <= 60) {
      level = NONG_EMOTION.TALK_TO_THE_HAND;
    } else if (predictScore >= 31 && predictScore <= 40) {
      level = NONG_EMOTION.STOP;
    } else if (predictScore >= 11 && predictScore <= 30) {
      level = NONG_EMOTION.MUTATE;
    } else if (predictScore <= 10 && predictScore >= 0) {
      level = NONG_EMOTION.MUTATE_POOR;
    } else if (predictScore < 0) {
      level = NONG_EMOTION.DIE;
    }
 
    return level;
  }

  render() {
    let nongCurrentEmotion = NONG_EMOTION.GREETING;

    const { style, wmData, dispatch, nav, programSelected, 
      programData,
      currentScore,
      scoreChange,
      customScore,
    } = this.props;
    const { step, clothesWeight, maxWeight } = wmData;

    if (step === WASHING_STATE.SUMMARY) {
      // on calculation
      nongCurrentEmotion = NONG_EMOTION.THINKING;
    }
    else if (step === WASHING_STATE.FINISH_WASHING) {
      nongCurrentEmotion = NONG_EMOTION.FINISH;
      setTimeout(() => {
        dispatch(changeStepFromFinishToSummary());
        dispatch(changeMenu(MENU_LEVEL.SUMMARY));

        // save current score
        // call dispatch action
        dispatch(updateScore(currentScore + scoreChange));

      }, 1500);
    }
    else if (step === WASHING_STATE.START_WASHING) {
      nongCurrentEmotion = NONG_EMOTION.START;
      
      // wait for animation to finish and then update step
      setTimeout(() => {
        dispatch(changeStepFromStartToWash());
      }, 3000);
    } 
    else if (step === WASHING_STATE.WASHING) {
      nongCurrentEmotion = NONG_EMOTION.START;
    } 
    // CONFIG
    else {
      // greeting at the menu
      if (nav.menu == MENU_LEVEL.HOME) {
        nongCurrentEmotion = NONG_EMOTION.GREETING;
      } 

      // program or hungry??


      // when choose a new program
      else if (programSelected && !lodash.isEqual(programData, this.programData)) {
        nongCurrentEmotion = this.getNongLevel();
        this.programData = programData; 
      }
      else if (clothesWeight > 0 && !this.hungry && this.clothesWeight !== clothesWeight) {
        if (clothesWeight < maxWeight / 2) {
          nongCurrentEmotion = NONG_EMOTION.HUNGRY;
        } else if (clothesWeight >= maxWeight - 2 && clothesWeight <= maxWeight + 1) {
          nongCurrentEmotion = NONG_EMOTION.FULL;
        } else if (clothesWeight > maxWeight) {
          nongCurrentEmotion = NONG_EMOTION.TOO_FULL; 
        } else {
          nongCurrentEmotion = NONG_EMOTION.HUNGRY;
        }

        // hungry time set
        this.hungry = true;
        setTimeout(() => {
          this.hungry = false;
        }, 3000)

        this.clothesWeight = clothesWeight;
      } else {
        // others
        if (!this.persistEmotion) {
          Math.random();
          this.persistEmotion = NONG_EMOTION.SOMETHING;
          this.persistEmotion = NONG_EMOTION.POINT;
        }


      }
    }
 
    return (
      <View style={style}>
         <Image
          style={styles.nong}
          resizeMode="contain"
          source={nongIcons[nongCurrentEmotion]} />
      </View>
    )
  }
}

const mapStateToProps = ({wmData, program, nav}) => {
  const { scoreChange, currentScore, selected, data } = program;
  return { 
    wmData,
    scoreChange,
    currentScore,
    programSelected: selected,
    programData: data,
    nav,
  };
}

export default connect(mapStateToProps)(Nong);
