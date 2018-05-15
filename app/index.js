import React from "react";
import PropTypes from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider, connect } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';

import Home from './screens/Home';
import store from './config/store';

EStyleSheet.build({
  $primary: "#041E50",
  $primaryNonSelect: "#6480B8",
  $blueGray: '#B9C5DE',
  $yellow: '#FBC400',
  $orange: '#FF8023',
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",
  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGray: "#F0f0f0",
  $darkText: "#343434"
});

export default () => (
  <Provider store={store}>
    {/* <MenuProvider> */}
      <Home />
    {/* </MenuProvider> */}
  </Provider>
);
