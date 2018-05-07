import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import ProgramItem from './ProgramItem';

import { adjustProgram } from '../../actions/program';

class ProgramData extends Component {
  handleCheckboxPress = (key) => {
    const data = this.props.programData;
    const val = data[key];   
    this.props.dispatch(adjustProgram(key, !val));
  }

  render() {
    const data = this.props.programData;
    return (
      <View style={styles.content}>
        <ProgramItem text="Temperature" icon="temperature" value={data.temperature} />
        <ProgramItem text="Spin Speed" icon="rpm" value={data.spin_speed} />
        <ProgramItem onPress={() => this.handleCheckboxPress('pre_wash')} text="Pre-wash" icon="pre_wash" checkbox={true} selected={data.pre_wash}  />
        <ProgramItem onPress={() => this.handleCheckboxPress('heavy_stain')} text="Heavy Stain" icon="heavy_stain" checkbox={true} selected={data.heavy_stain}  />
        <ProgramItem onPress={() => this.handleCheckboxPress('rapid')} text="Rapid" icon="rapid" selected={true} checkbox={true} selected={data.rapid}  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { program } = state;
  return {
    programData: program.data
  }
};

export default connect(mapStateToProps)(ProgramData);
