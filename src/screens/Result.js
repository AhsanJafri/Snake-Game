import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export class Result extends Component {
  constructor() {
    super();
    this.props = {
      name: '',
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000',
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 28,
              padding: 10,
              color: '#fff',
            }}>
            Your Score :{' '}
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              {' ' + this.props.route.params.score}
            </Text>
          </Text>
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => this.props.navigation.navigate('NameScreen')}>
            <Text
              style={{
                fontSize: 22,
                padding: 10,
                color: '#fff',
              }}>
              Play Again
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Result;
