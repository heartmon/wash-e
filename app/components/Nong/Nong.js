import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import { NONG_EMOTION } from '../../config/constant';

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
  render() {
    const { style, children } = this.props;
    return (
      <View style={style}>
         <Image
          style={styles.nong}
          resizeMode="contain"
          source={nongIcons[NONG_EMOTION.BATH]} />
      </View>
    )
  }
}

export default Nong;