import React, { Component } from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { BackHandler } from 'react-native';

import styles from "./styles";

import MenuItem from './MenuItem';
import MenuPager from './MenuPager';
import { MenuButton } from '../Button';

import { connect } from 'react-redux';
import { changeMenu } from '../../actions/nav';
import { customProgram, changeProgram, unselectedProgram } from '../../actions/program';
import { resetStep } from '../../actions/wm_data'; 

import { PROGRAM_TYPE, MENU_LEVEL, WASHING_STATE } from '../../config/constant';
import programData from '../../data/program';
import { custom } from '../../data/default';

const menuIcon = {};
menuIcon[PROGRAM_TYPE.NORMAL_30] = require('./images/icon_normal30.png');
menuIcon[PROGRAM_TYPE.NORMAL_40] = require('./images/icon_normal40.png');
menuIcon[PROGRAM_TYPE.NORMAL_60] = require('./images/icon_normal60.png');
menuIcon[PROGRAM_TYPE.HYGIENE] = require('./images/icon_hygiene.png');
menuIcon[PROGRAM_TYPE.DELICATE] = require('./images/icon_delicate.png');

const menuList = {
  'HOME': [
    {
      title: "Pre-defined Program",
      to: MENU_LEVEL.PRE_DEFINED,
      icon: require('./images/icon_predefined.png'),
    },
    {
      title: "Custom Program",
      to: MENU_LEVEL.CUSTOM,
      icon: require('./images/icon_custom.png'),
    },
  ],
};

menuList[MENU_LEVEL.PRE_DEFINED] = programData.map((program) => {
  return {
    title: program.title,
    key: program.key,
    icon: menuIcon[program.key],
    program: program,
  }
});
 
menuList[MENU_LEVEL.WASHING] = [
  {
    title: "Cancel Wash",
    to: MENU_LEVEL.HOME,
    icon: require('./images/icon_cancel.png')
  }
]

menuList[MENU_LEVEL.SUMMARY] = [
  {
    title: "Start new washing",
    to: MENU_LEVEL.SUMMARY,
    icon: require('./images/icon_predefined.png'),
  }
]

class Menu extends Component {
  constructor(props) {
    super(props);
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { menu } = this.props.nav;
      if (menu !== 'HOME') {
        this.props.dispatch(changeMenu('HOME'));
        this.props.dispatch(unselectedProgram());
        return true; 
      } else {
        return false;
      }

      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.
    
      // if (!this.onMainScreen()) {
      //   this.goBack();
      //   return true;
      // }
      // return false;
    });
  }

  handlePress = (menuItem) => {
    const { dispatch } = this.props;
    if (menuItem.to) {
      switch(menuItem.to) {
        case 'PRE_DEFINED':
          dispatch(changeMenu(menuItem.to));
        break;

        case 'CUSTOM':
          // change menu
          dispatch(changeMenu(menuItem.to));

          // set custom to true
          dispatch(customProgram(custom));

        break;

        case 'SUMMARY':
          // reset everything
          dispatch(changeMenu(MENU_LEVEL.HOME));
          dispatch(unselectedProgram());
          dispatch(resetStep());
          // reset clothes weight

        break;

        default:
      }
    } else {
      dispatch(changeProgram(menuItem.program));
    }
  }

  render() {
    const { menu } = this.props.nav;

    let menuContent = menuList[menu] && this.props.step !== WASHING_STATE.START_WASHING &&  menuList[menu].map(
      (m, index) => (
        <MenuButton 
          onPress={() => this.handlePress(m)} 
          style={{marginHorizontal: 20}} 
          text={m.title} 
          key={index} 
          icon={m.icon}
          selected={m.key && m.key === this.props.program.selected}
        />
      ));
    
    if (menu === MENU_LEVEL.CUSTOM) {
      menuContent = (<View>
        <Text>Custom Menu</Text>
      </View>)
    }

    return (
      <View onStartShouldSetResponder={() => true}
        style={styles.container}
      >
        <ScrollView
          horizontal={true}
          // pagingEnabled={true}
          contentContainerStyle={{alignItems: 'center', justifyContent: 'center',}}
        >
          { 
            menuList[menu] && menuContent
          }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => { 
  const { nav, program, wmData } = state;
  return {
    nav,
    program,
    step: wmData.step,
  }; 
};

export default connect(mapStateToProps)(Menu);
// export default Menu;
