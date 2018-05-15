import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { changeStepFromStartToWash } from '../../actions/wm_data';
import { NONG_EMOTION, WASHING_STATE } from '../../config/constant';

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
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    };
  }

  render() {
    let nongCurrentEmotion = NONG_EMOTION.GREETING;

    const { style, wmData, dispatch } = this.props;
    const { step } = wmData;

    if (step === WASHING_STATE.START_WASHING) {
      nongCurrentEmotion = NONG_EMOTION.START;
      
      // wait for animation to finish and then update step
      setTimeout(() => {
        dispatch(changeStepFromStartToWash());
      }, 3500)
    } else if (step === WASHING_STATE.WASHING) {
      nongCurrentEmotion = NONG_EMOTION.START;
    } else {
      // hungry
      const { clothesWeight, maxWeight } = wmData;
      if (clothesWeight > 0) {
        if (clothesWeight < maxWeight / 2) {
          nongCurrentEmotion = NONG_EMOTION.HUNGRY;
        } else if (clothesWeight >= maxWeight - 2 && clothesWeight <= maxWeight + 1) {
          nongCurrentEmotion = NONG_EMOTION.FULL;
        } else if (clothesWeight > maxWeight) {
          nongCurrentEmotion = NONG_EMOTION.TOO_FULL; 
        } else {
          nongCurrentEmotion = NONG_EMOTION.HUNGRY;
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

const mapStateToProps = ({wmData}) => {
  return { wmData };
}

export default connect(mapStateToProps)(Nong);
