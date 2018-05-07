import React, { Component } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { Container } from '../Container';
import styles from "./styles";

import { ENVIRONMENT_LEVEL } from '../../config/constant';

const envIcons = {};
envIcons[ENVIRONMENT_LEVEL.POLLUTED] = require('./images/scene_polluted.png');
envIcons[ENVIRONMENT_LEVEL.BAD] = require('./images/scene_bad.png');
envIcons[ENVIRONMENT_LEVEL.DULL] = require('./images/scene_dull.png');
envIcons[ENVIRONMENT_LEVEL.FALLEN] = require('./images/scene_start_to_bad.png');
envIcons[ENVIRONMENT_LEVEL.GOOD] = require('./images/scene_good.png');
envIcons[ENVIRONMENT_LEVEL.VERY_GOOD] = require('./images/scene_very_good.png');
envIcons[ENVIRONMENT_LEVEL.EXCELLENT] = require('./images/scene_excellent.png');

class Environment extends Component {
  render() {
    const { children, style } = this.props;
    return (   
      <ImageBackground style={[styles.background, style]} source={envIcons[ENVIRONMENT_LEVEL.GOOD]}>
        {children}  
      </ImageBackground>
    );
  }
}

export default Environment;
