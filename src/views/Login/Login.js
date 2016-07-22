import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
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
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#000',
    flex: 1,
    padding: 5
  },
  buttonWrapper: {
    flexDirection: 'row'
  }
});


@observer
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { username:'gianfranco@linkme.it', password:'gianfranco123'};
  }

  handleUsername = (username) => this.setState({ username });

  handlePassword = (password) => this.setState({ password });

  login = () => {
    const { username, password } = this.state;
    this.props.store.login(username, password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.handleUsername}
            value={this.state.username}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.handlePassword}
            value={this.state.password}
          />
          <View style={styles.buttonWrapper}>
            <TouchableHighlight
              onPress={this.login}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>
      </View>
    );
  }
}


export default Login;