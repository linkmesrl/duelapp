import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});

class Home extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCcVfb56wd0nb8P6rq3e6BVf5v4lgCcGOc',
      authDomain: 'duel-c2f0b.firebaseapp.com',
      databaseURL: 'https://duel-c2f0b.firebaseio.com',
      storageBucket: 'duel-c2f0b.appspot.com',
    };
    firebase.initializeApp(config);
    console.log(firebase);
    firebase.database().ref('matches').push({
      running: true,
      target: {
        paolo: true,
      },
      members: {
        paolo: true,
        daniele: true,
      },
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hello {this.props.store.name}!</Text>
        <TouchableOpacity onPress={() => Actions.other()}>
          <Text>Go to Other</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Home;
