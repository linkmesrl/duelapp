import React, { Component, PropTypes } from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import { observer } from 'mobx-react/native';
import GiftedListView from 'react-native-gifted-listview';
import { Actions } from 'react-native-mobx';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    flex: 1,
    padding: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
});

const customStyles = {
  separator: {
    height: 1,
    backgroundColor: '#CCC',
  },
  paginationView: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    paddingTop: 70,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  row: {
    width,
    padding: 10,
    height: 44,
  },
};

@observer(['matchStore'])
class CreateMatch extends Component {

  constructor(props) {
    super(props);
    this.state = { matchName: 'new Match' };
  }

  componentDidMount() {
    const { matchStore } = this.props;
    matchStore.getUsersList();
  }

  onFetch = (page = 1, callback) => {
    const { matchStore } = this.props;
    const rows = Object.keys(matchStore.usersList)
    .map(key => matchStore.usersList[key])
    .map(filteredMatch => JSON.stringify(filteredMatch));
    callback(rows, { allLoaded: true });
  }

  onPress = (rowParsed) => {
    console.log('press', rowParsed);
    // this.createMatch();
  }

  renderRowView = (rowData) => {
    const rowParsed = JSON.parse(rowData);
    return (
      <TouchableHighlight
        style={customStyles.row}
        underlayColor="#c8c7cc"
        onPress={() => this.onPress(rowParsed)}
      >
        <Text>
          {rowParsed.email}
        </Text>
      </TouchableHighlight>
    );
  }

  createMatch = () => {
    const { matchStore } = this.props;
    matchStore.pushMatch(this.state.matchName)
    .then((match) => {
      console.log(match);
      Actions.matches();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleMatchName = (matchName) => this.setState({ matchName });

  render() {
    const { matchStore } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={this.handleMatchName}
          value={this.state.matchName}
        />
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            onPress={this.createMatch}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create Match with all users</Text>
          </TouchableHighlight>
        </View>
        {matchStore.usersList.length !== 0 ?
          <GiftedListView
            rowView={this.renderRowView}
            onFetch={this.onFetch}
            enableEmptySections
            pagination
            refreshable
            withSections={false}
            customStyles={customStyles}
            refreshableTintColor="blue"
          />
        :
          <Text>Loading...</Text>
        }

      </View>
    );
  }
}

CreateMatch.propTypes = {
  matchStore: PropTypes.object.isRequired,
};

export default CreateMatch;
