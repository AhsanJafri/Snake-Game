/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Main from './src/screens/Main';
import StackRoute from './src/navigation/StackRoute';
console.disableYellowBox = true;

export default class Game extends Component {
  render() {
    return <StackRoute />;
  }
}

AppRegistry.registerComponent('game', () => Game);
