import React, { Component, PropTypes } from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { observer } from 'mobx-react/native';
import GiftedListView from 'react-native-gifted-listview';


const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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


  render() {
    const { matchStore } = this.props;
    return (
      <View style={styles.container}>
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
