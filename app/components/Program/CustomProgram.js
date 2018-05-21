import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import ProgramItem from './ProgramItem';
import CustomProgramItem from './CustomProgramItem';

import { adjustProgram } from '../../actions/program';
import { MENU_LEVEL } from '../../config/constant';

import { getTimeText } from '../../utils/common';

const choicesData = {
  color: [
    { title: 'White', icon: null },
    { title: 'Color', icon: null }
  ],
  textile: [
    { title: 'Cotton', icon: null },
    { title: 'Synthetic', icon: null },
    { title: 'Silk', icon: null },
    { title: 'Wool', icon: null },
  ],
  stain: [
    { title: 'Light', icon: null },
    { title: 'Medium', icon: null },
    { title: 'Heavy', icon: null },
  ],
  special: [
    { title: 'Pre-wash', icon: null },
    { title: 'Hygeine', icon: null },
    { title: 'Delicate', icon: null },
    { title: 'Rapid', icon: null }
  ]
}


const CustomChoice = ({icon, selected, title}) => {
  return (
    <View>
      <View>
        <Image source={icon}/>
      </View>
      <Text>{title}</Text>
    </View>
  )
}

const CustomSection = ({title, choices}) => {
  return ( 
    <View style={{padding: 24}}>
      <Text style={{fontSize: 30, color: '#041E50', borderStyle: 'solid', borderBottomWidth: 1, borderBottomColor: '#6480B8'}}>{title}</Text>
      <View>
        {
          choices.map((choice, index) => (<CustomChoice key={index} title={choice.title}  />))
        }
      </View>
    </View> 
  )
};


 
class CustomProgram extends Component {
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

    const timeText = getTimeText(data.time);

    if (!this.isShowProgram() || !data) {
      return <View />  
    }  
    else {
      return (
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>Custom Program</Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('./images/icon_time.png')} style={styles.subtitleIcon} />
              <Text style={styles.subtitle}>{timeText}</Text>
            </View>
          </View>  
          <View style={styles.content}>
            <CustomSection title="Color" choices={choicesData.color} />
            {/* <CustomProgramItem active={true} />
            <CustomProgramItem active={false} />
            <CustomProgramItem active={false} />
            <CustomProgramItem active={false} /> */}
          </View>
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
