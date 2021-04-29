import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export class NameScreen extends Component {
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
          <TextInput
            placeholder="Enter Your Name"
            style={{
              backgroundColor: 'white',
              width: '90%',
              textAlign: 'center',
              fontSize: 20,
              borderRadius: 30,
              fontFamily: 'monospace',
            }}
            onChangeText={(txt) => this.setState({name: txt})}
          />
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() =>
              this.props.navigation.navigate('Main', {
                name: this.state.name,
              })
            }>
            <Text
              style={{
                fontSize: 22,
                padding: 10,
                color: '#fff',
              }}>
              Start Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NameScreen;
