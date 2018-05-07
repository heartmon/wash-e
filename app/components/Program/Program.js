import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, FlatList, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import ProgramItem from './ProgramItem';

import { adjustProgram } from '../../actions/program';
import { MENU_LEVEL } from '../../config/constant';

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
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.handlePress()} style={styles.handle}>
            <Image resizeMode="contain" style={styles.handleArrow} source={require('./images/arrow_down.png')} />
          </TouchableOpacity>
          {!(this.state.hide) && 
          (<View>
              <View style={styles.header}>
              <Text style={styles.title}>{data.title}</Text>
              <View style={styles.subtitleWrapper}>
                <Image style={styles.subtitleIcon} />
                <Text style={styles.subtitle}>00:48:00</Text>
              </View>
            </View> 
            <View style={styles.content}>
              <ProgramItem text="Temperature" icon="temperature" value={data.temperature} />
              <ProgramItem text="Spin Speed" icon="rpm" value={data.spin_speed} />
              {/* <Switch value={data.pre_wash} onValueChange={() => this.handleCheckboxPress('pre_wash')} /> */}
              <ProgramItem onPress={() => this.handleCheckboxPress('pre_wash')} text="Pre-wash" icon="pre_wash" checkbox={true} selected={data.pre_wash}  />
              <ProgramItem onPress={() => this.handleCheckboxPress('heavy_stain')} text="Heavy Stain" icon="heavy_stain" checkbox={true} selected={data.heavy_stain}  />
              <ProgramItem onPress={() => this.handleCheckboxPress('rapid')} text="Rapid" icon="rapid" selected={true} checkbox={true} selected={data.rapid}  />
            </View>
          </View>
          )}
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

export default connect(mapStateToProps)(Program);
