import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
class Matches extends Component {
  componentDidMount() {
    this.props.store.getMatchesList();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Matches</Text>
      </View>
    );
  }
}

Matches.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Matches;
