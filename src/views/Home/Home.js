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
  matchButton: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
});

@observer
class Home extends Component {
  componentDidMount() {
    // this.props.store.pushMatches();
  }

  goToSingleMatch() {
    Actions.match();
  }

  goToMatches() {
    Actions.matches();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to DuelApp!</Text>
        <TouchableOpacity onPress={this.goToSingleMatch}>
          <Text style={styles.matchButton}>Go to single match</Text>
        </TouchableOpacity>
        {this.props.store.matchesPushed &&
          <TouchableOpacity onPress={this.goToMatches}>
            <Text>Go to matches</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

Home.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Home;
