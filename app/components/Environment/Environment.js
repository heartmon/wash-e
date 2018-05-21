import React, { Component } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { connect } from 'react-redux';

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

  getEnvironmentLevel = () => {
    const { scoreChange, currentScore } = this.props;
    const predictScore = scoreChange + currentScore;

    let level = ENVIRONMENT_LEVEL.GOOD;
    if (predictScore >= 91) {
      level = ENVIRONMENT_LEVEL.EXCELLENT;
    } else if (predictScore >= 81 && predictScore <= 90) {
      level = ENVIRONMENT_LEVEL.VERY_GOOD;
    } else if (predictScore >= 61 && predictScore <= 80) {
      level = ENVIRONMENT_LEVEL.GOOD;
    } else if (predictScore >= 41 && predictScore <= 60) {
      level = ENVIRONMENT_LEVEL.DULL;
    } else if (predictScore >= 31 && predictScore <= 40) {
      level = ENVIRONMENT_LEVEL.FALLEN;
    } else if (predictScore >= 11 && predictScore <= 30) {
      level = ENVIRONMENT_LEVEL.BAD;
    } else if (predictScore <= 10) {
      level = ENVIRONMENT_LEVEL.POLLUTED;
    }

    return level;
  }

  render() {
    const { children, style } = this.props;
    const level = this.getEnvironmentLevel();
    return (   
      <ImageBackground style={[styles.background, style]} source={envIcons[level]}>
        {children}  
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({program}) => {
  const { scoreChange, currentScore } = program;
  return {
    scoreChange,
    currentScore,
  }
};

export default connect(mapStateToProps)(Environment);
