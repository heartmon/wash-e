import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, FlatList, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from "react-native-extended-stylesheet";
import SvgUri from 'react-native-svg-uri';

import commonStyles from './styles';

import ProgramItem from './ProgramItem';
import CustomProgramItem from './CustomProgramItem';

import { adjustProgram } from '../../actions/program';
import { MENU_LEVEL } from '../../config/constant';

const styles = EStyleSheet.create({
  $currentFill: '$primary',
  container: {
    paddingHorizontal: 16,
    paddingRight: 24,
    paddingVertical: 24,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 24,
    width: 45,
  },
  barContainer: {
    position: 'relative',
    flex: 1,
  },
  bar: {
    width: '100%',
    backgroundColor: '#C4C4C4',
    height: 21,
    borderRadius: 4,
    position: 'absolute',
    top: -8,
  },
  barValue: {
    width: 150,
    backgroundColor: '#222222',
    height: 21,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    position: 'absolute',
    top: -8,
  },
  barChange: {
    width: 30,
    backgroundColor: '#666666',
    height: 21,
    position: 'absolute',
    borderStyle: 'solid',
    borderColor: 'white',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    top: -8,
  },
  arrow: {
    zIndex: 5, 
    position: 'absolute', 
    top: 18,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: 30,
  }, 
  arrowHead: {
 
  },
  arrowTail: {
    borderStyle: 'dotted',
    borderColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '$primary',
    height: 1, 
    flex: 1,
  }, 
  title: {
    fontSize: 24,
    color: '$primary',
    marginVertical : 16,
  },
});

const indicatorStyle = {
  position: 'absolute',
  top: -18, 
  zIndex: 3, 
  transform: [
    {rotateX: '180deg'}
  ]  
}

const Arrow = ({direction, width, left}) => {
  let directionStyle = direction === 'inc' ? {transform: [
    {rotateY: '180deg'}
  ]} : {}; 
  return (
    <View style={[styles.arrow, direction === 'inc' ? {flexDirection: 'row-reverse'} : {}, {width, left}]}>
      <Image style={directionStyle} source={require('./images/arrow_head.png')} />
      <View style={styles.arrowTail}></View>
    </View>
  )
};

const Indicator = ({left, fill}) => {
  return (
    <SvgUri 
      style={{...indicatorStyle, left: left}} 
      fill={fill}
      source={require('../Bubble/images/indicator.svg')}
    />
  );
}

class Bar extends Component {
  currentFill = '#041E50';
  fadeFill = '#E0E0E0';

  barWidth;

  constructor(props) {
    super(props);
    this.state = {
      oldValuePercent: 0,
      changePercent: 0
    }
  }

  // calculation of width
  onLayout = (event) => {
    // const {x, y, width, height} = event.nativeEvent.layout;
    // this.barWidth = width;
    // // set state
    // this.calculate();
  }

  render() {
    const {oldValue, newValue, color, fadeColor} = this.props;
    const direction = (newValue - oldValue) >= 0 ? 'inc' : 'dec';

    const indOffset = -2;

    let barValue, changeValue;
    let currentIndLeft, fadeIndLeft;
    if (direction === 'inc') {
      barValue = oldValue;
      changeValue = Math.abs(newValue - oldValue);
    } else {
      barValue = newValue;
      changeValue = Math.abs(newValue - oldValue);
    }
    currentIndLeft = newValue + indOffset;
    fadeIndLeft = oldValue + indOffset;

    return (
      <View style={styles.barContainer}> 
        <View style={styles.bar} onLayout={this.onLayout}></View>
        <View style={[styles.barValue, color && {backgroundColor: color}, {width: barValue + '%'}]}>
        </View>
        <View style={[styles.barChange, fadeColor && {backgroundColor: fadeColor}, {left: barValue + '%', width: changeValue + '%'} ]}></View> 
        <Indicator left={currentIndLeft + '%'} fill={this.currentFill} /> 
        <Indicator left={fadeIndLeft + '%'} fill={this.fadeFill} />
        <Arrow direction={direction} width={changeValue + '%'} left={barValue + '%'} />
      </View> 
    );
  }
}

class SummaryProgram extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props.program;

    return (
      <View> 
        <View style={commonStyles.header}>
          <Text style={commonStyles.title}>Wash Result</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./images/icon_time.png')} style={commonStyles.subtitleIcon} />
            <Text style={commonStyles.subtitle}>00:48:00</Text>
          </View>
        </View>  
        <View style={[commonStyles.content, styles.container]}>
          <View>
            <Text style={styles.title}>Environmental Impact</Text>
            <View style={styles.item}>
              <Image resizeMode="contain" style={styles.icon} source={require('./images/icon_animal.png')} />
              <Bar oldValue={50} newValue={30} color="#FFB55F" fadeColor="#BA8080" />
            </View>
            <View style={styles.item}>
              <Image resizeMode="contain" style={styles.icon} source={require('./images/icon_tree.png')} />
              <Bar oldValue={100} newValue={80} color="#5FE798" fadeColor="#1F5A66" />
            </View>
          </View>
          <View>
            <Text style={styles.title}>Environmental Quality</Text>
            <View style={styles.item}>
              <Image resizeMode="contain" style={styles.icon} source={require('./images/icon_air.png')} />
              <Bar oldValue={40} newValue={70} color="#9FAEFF" fadeColor="#334985" />
            </View>
            <View style={styles.item}>
              <Image resizeMode="contain" style={styles.icon} source={require('./images/icon_water.png')} />
              <Bar oldValue={30} newValue={40} color="#84DBFF" fadeColor="#2A5785" /> 
            </View>
          </View>
        </View>
      </View>
    );
  } 
} 

const mapStateToProps = ({program, impact}) => {
  return {
    program,
    impact
  }
};

export default connect(mapStateToProps)(SummaryProgram);
