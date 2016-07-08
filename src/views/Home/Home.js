import React, { PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Actions } from 'react-native-router-flux';

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

const Home = (props) =>
  <View style={styles.container}>
    <Text style={styles.heading}>Hello {props.store.name}!</Text>
    <TouchableOpacity onPress={() => Actions.other()}>
      <Text>Go to Other</Text>
    </TouchableOpacity>
  </View>;

Home.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Home;
