/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Alert,
  BackHandler,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import Main from './src/Main';

console.disableYellowBox = true;
const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'sans-serif',
          fontSize: 50,
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}>
        Snake Game
      </Text>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/564x/46/a2/8a/46a28a2094d967246111f1efa3f50ef6.jpg',
        }}
        style={{width: 300, height: 300, marginTop: '5%'}}
        resizeMode="contain"
      />
    </View>
  );
};
export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'splash',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mode: 'game'});
    }, 3000);
  }
  render() {
    const {mode} = this.state;
    return (
      <View style={styles.container}>
        {mode !== 'splash' ? <Main /> : <Splash />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('game', () => Game);
