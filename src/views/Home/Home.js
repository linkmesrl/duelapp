import React, { Component, PropTypes } from 'react';
import { AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-mobx';
import { observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const STORAGE_KEY = '@AsyncStorageLogged:key';
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    borderWidth: 1,
  },
});

@observer(['matchesStore', 'loginStore'])
class Home extends Component {
  componentDidMount() {
    const { matchesStore } = this.props;
    if (this.props.user) {
      matchesStore.setUser(JSON.parse(this.props.user));
    } else {
      matchesStore.getUser();
    }
  }

  async logoutCurrentUser(user) {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY, user);
      Actions.login({
        type: 'replace',
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  goToSingleMatch = () => {
    const { matchesStore } = this.props;
    matchesStore.pushMatch()
    .then((match) => {
      console.log('Match: ', match.val());
      Actions.match({
        match: match.val(),
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  goToMatches() {
    Actions.matches();
  }

  goToProfile() {
    Actions.profile();
  }

  logout = () => {
    const { loginStore } = this.props;
    loginStore.logout()
    .then(() => {
      console.log('mi sloggo');
      this.logoutCurrentUser();
    })
    .catch((err) => {
      console.log('Error getting logged out: ', err);
    });
  }

  render() {
    const { matchesStore } = this.props;
    return (
      <View style={styles.container}>
        <Animatable.Text
          animation="fadeInUp"
          duration={500}
          style={styles.heading}
        >
            Welcome {matchesStore.user.email}!
        </Animatable.Text>
        <Animatable.View
          animation="fadeInUp"
          duration={600}
        >
          <TouchableOpacity onPress={this.goToSingleMatch}>
            <Text style={styles.matchButton}>
              <Icon name="plus" size={20} color="#000" /> Create a new match
            </Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View
          animation="fadeInUp"
          duration={700}
        >
          <TouchableOpacity onPress={this.goToMatches}>
            <Text style={styles.matchButton}>
              Go to matches <Icon name="chevron-right" size={20} color="#000" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.goToProfile}>
            <Text style={styles.matchButton}>
              Go to profile <Icon name="chevron-right" size={20} color="#000" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.logout}>
            <Text style={styles.matchButton}>
              Logout <Icon name="chevron-right" size={20} color="#000" />
            </Text>
          </TouchableOpacity>
        </Animatable.View>
        {
          // this.props.matchesList.map((el, i) => <Text style={styles.heading}>{el}</Text>)
        }
        {matchesStore.matchesPushed &&
          <TouchableOpacity onPress={this.goToMatches}>
            <Text animation="fadeInUp">Go to matches</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

Home.propTypes = {
  matchesStore: PropTypes.object.isRequired,
  user: PropTypes.string,
  loginStore: PropTypes.object.isRequired,
};

export default Home;
