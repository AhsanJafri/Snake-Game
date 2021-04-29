import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('NameScreen');
    }, 3000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 100}}>🐍</Text>
        <Text
          style={{
            fontFamily: 'serif',
            fontSize: 50,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: '5%',
          }}>
          Snake Game
        </Text>
      </View>
    );
  }
}

export default Splash;
