import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Check from './Check';

import styles from './styles';

const icons = {
  'temperature': require('./images/temperature.png'),
  'rpm': require('./images/rpm.png'),
  'pre_wash': require('./images/pre_wash.png'),
  'heavy_stain': require('./images/heavy_stain.png'),
  'rapid': require('./images/rapid.png'),
}


class ProgramItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    }
  }

  handlePress = () => {   
    // this.setState({selected: !this.state.selected});
    this.props.onPress();
  }

  render() {
    const {icon, text, value, checkbox, selected, clickable, onPress} = this.props;
    let itemValue;
    if (checkbox) {
      itemValue = (<Check selected={selected} />);
    } else {
      itemValue = (<Text style={styles.itemValue}>{value}</Text>);
    }
    if (clickable || checkbox) {  
      return (
        <TouchableOpacity onPress={onPress} style={styles.programItemContainer}>
          <Image resizeMode="contain" style={styles.icon} source={icons[icon]} />
          <Text style={styles.itemText}>{text}</Text>
          {itemValue}
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.programItemContainer}>
          <Image resizeMode="contain" style={styles.icon} source={icons[icon]} />
          <Text style={styles.itemText}>{text}</Text>
          {itemValue}
        </View>
      );
    }
  }
}

export default ProgramItem;
