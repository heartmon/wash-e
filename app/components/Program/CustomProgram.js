import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';
import { find } from 'lodash';

import styles from './styles';

import ProgramItem from './ProgramItem';
import CustomProgramItem from './CustomProgramItem';

import {
  adjustProgram,
  selectCustomColor,
  selectCustomSpecial,
  selectCustomTextile,
  selectCustomStain
} from '../../actions/program';
import { MENU_LEVEL } from '../../config/constant';

import { getTimeText } from '../../utils/common';

const choicesData = {
  color: [
    { title: 'White', icon: require('./images/icon_white_color.png') },
    { title: 'Color', icon: require('./images/icon_color_color.png') }
  ],
  textile: [
    { title: 'Cotton', icon: require('./images/icon_cotton_textile.png') },
    { title: 'Synthetic', icon: require('./images/icon_synthetic_textile.png') },
    { title: 'Silk', icon: require('./images/icon_silk_textile.png') },
    { title: 'Wool', icon: require('./images/icon_wool_textile.png') },
  ],
  stain: [
    { title: 'Light', icon: require('./images/icon_light_stain.png') },
    { title: 'Medium', icon: require('./images/icon_medium_stain.png') },
    { title: 'Heavy', icon: require('./images/icon_heavy_stain.png') },
  ],
  special: [
    { title: 'Pre-wash', icon: require('./images/icon_pre_wash.png') },
    { title: 'Hygeine', icon: require('../Menu/images/icon_hygiene.png') },
    { title: 'Delicate', icon: require('../Menu/images/icon_delicate.png') },
    { title: 'Rapid', icon: require('./images/icon_rapid.png') }
  ]
}


const choiceStyles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 24,
  },
  box: {
    backgroundColor: '#6480B8',
    borderRadius: 10,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSelected: {
    backgroundColor: '#041E50',
  },
  text: {
    color: '#6480B8',
  },
  textSelected: {
    color: '#041E50',
  },
  icon: {
    width: 40, 
  }
}


const CustomChoice = ({icon, selected, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={choiceStyles.container}>
      <View style={[choiceStyles.box, selected && choiceStyles.boxSelected]}>
        <Image style={choiceStyles.icon} resizeMode="contain" source={icon}/>
      </View> 
      <Text style={[choiceStyles.text, selected && choiceStyles.textSelected]}>{title}</Text>
    </TouchableOpacity>
  )
}

const CustomSection = ({title, choices, onChoicePress, customData}) => {
  return ( 
    <View style={{padding: 24}}>
      <Text style={{fontSize: 30, color: '#041E50', borderStyle: 'solid', borderBottomWidth: 1, borderBottomColor: '#6480B8'}}>{title}</Text>
      <View style={{flexDirection: 'row', marginTop: 30,}}>
        {
          choices.map((choice, index) => (
            <CustomChoice 
              onPress={() => onChoicePress(choice)} 
              key={index} 
              title={choice.title} 
              icon={choice.icon} 
              selected={(() => {
                if (!customData) {
                  return false;
                }
                if(customData.push) {
                  return find(customData, (d) => d.title === choice.title);
                } else {
                  return customData.title === choice.title;
                }
              })()}
            />
          ))
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

  handleChoicePress = (type, choice) => {
    const { dispatch } = this.props;
    switch(type) {
      case 'color':
        dispatch(selectCustomColor(choice));
        break;
      case 'textile':
        dispatch(selectCustomTextile(choice));
        break;
      case 'stain':
        dispatch(selectCustomStain(choice));
        break;
      case 'special':
        dispatch(selectCustomSpecial(choice));
        break;
    }
  }

  render() {
    const { data, customData } = this.props.program;
    const { customStep } = this.props;

    const timeText = getTimeText(data.time);

    if (!this.isShowProgram() || !data) {
      return <View />  
    }  
    else {
      return (
        <View style={{minHeight: 486}}>
          <View style={styles.header}>
            <Text style={styles.title}>Custom Program</Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('./images/icon_time.png')} style={styles.subtitleIcon} />
              <Text style={styles.subtitle}>{timeText}</Text>
            </View>
          </View>  
          <View style={styles.content}>
            {customStep === 1 && <CustomSection customData={customData.color} onChoicePress={(choice) => this.handleChoicePress('color', choice)} title="Color" choices={choicesData.color} /> }
            {customStep === 2 && <CustomSection customData={customData.textile} onChoicePress={(choice) => this.handleChoicePress('textile', choice)} title="Textile" choices={choicesData.textile} /> }
            {customStep === 3 && <CustomSection customData={customData.stain} onChoicePress={(choice) => this.handleChoicePress('stain', choice)} title="Stain" choices={choicesData.stain} /> }   
            {customStep === 4 && <CustomSection customData={customData.special} onChoicePress={(choice) => this.handleChoicePress('special', choice)} title="Special" choices={choicesData.special} /> }
          </View>
        </View>
      );
    }
  } 
}

const mapStateToProps = ({program, nav}) => {
  return {
    program,
    customStep: nav.customStep,
  }
};

export default connect(mapStateToProps)(CustomProgram);
