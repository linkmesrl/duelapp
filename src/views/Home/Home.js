import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';

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

@observer
class Home extends Component {
  componentDidMount() {
    this.props.store.pushMatches();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to DuelApp!</Text>
        <TouchableOpacity onPress={() => Actions.login()}>
          <Text>Login</Text>
        </TouchableOpacity>
        {this.props.store.matchesPushed ?
          <TouchableOpacity onPress={() => Actions.matches()}>
            <Text>Go to matches</Text>
          </TouchableOpacity>
        :
          <Text>Loading...</Text>
        }
      </View>
    );
  }
}

Home.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Home;
