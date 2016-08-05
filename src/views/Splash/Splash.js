import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const STORAGE_KEY = '@AsyncStorageLogged:key';

class Splash extends Component {
  componentDidMount() {
    this.loadInitialState().done();
  }

  async loadInitialState() {
    try {
      var value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null){
        Actions.home({
          type: 'replace',
          user: value
        });
      } else {
        Actions.login({
          type: 'replace',
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <View>
        <Text>yoo</Text>
      </View>
    );
  }
}

export default Splash;
