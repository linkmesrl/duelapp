import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

@observer(['profileStore'])
class Profile extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  saveUserData = () => {
    profileStore.saveUserData()
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default Profile;
