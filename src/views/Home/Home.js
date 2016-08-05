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
    if (this.props.user) {
      this.props.store.setUser(JSON.parse(this.props.user));
    } else {
      this.props.store.getUser();
    }
  }

  goToSingleMatch = () => {
    this.props.store.pushMatch()
    .then((match) => {
      console.log(match);
      // Actions.match(match);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  goToMatches() {
    Actions.matches();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome {this.props.store.user.email}!</Text>
        <TouchableOpacity onPress={this.goToMatches}>
          <Text style={styles.matchButton}>Go to matches</Text>
        </TouchableOpacity>
        {
          // this.props.matchesList.map((el, i) => <Text style={styles.heading}>{el}</Text>)
        }
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
  user: PropTypes.string,
};

export default Home;
