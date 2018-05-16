import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, FlatList, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import ProgramItem from './ProgramItem';
import CustomProgramItem from './CustomProgramItem';

import { adjustProgram } from '../../actions/program';
import { MENU_LEVEL } from '../../config/constant';

class SummaryProgram extends Component {
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
    const { program } = this.props;
    return program.selected !== '';
    // return menu !== MENU_LEVEL.HOME && program.selected !== '';
  }

  render() {
    const { data } = this.props.program;
    if (!this.isShowProgram() || !data) {
      return <View />  
    }  
    else {
      return (
          <View style={styles.content}>
            <CustomProgramItem active={true} />
            <CustomProgramItem active={false} />
            <CustomProgramItem active={false} />
            <CustomProgramItem active={false} />
          </View>
      );
    }
  } 
}

const mapStateToProps = ({program, menu}) => {
  return {
    program,
    // menu
  }
};

export default connect(mapStateToProps)(CustomProgram);
