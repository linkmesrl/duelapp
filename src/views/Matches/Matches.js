import React, { Component, PropTypes } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { observer } from 'mobx-react/native';
import { Actions } from 'react-native-mobx';

import Icon from 'react-native-vector-icons/FontAwesome';
import GiftedListView from 'react-native-gifted-listview';
import moment from 'moment';

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

@observer(['matchesStore'])
class Matches extends Component {
  componentDidMount() {
    const { matchesStore } = this.props;
    matchesStore.getMatchesList();
  }

  onFetch = (page = 1, callback) => {
    const { matchesStore } = this.props;
    const rows = Object.keys(matchesStore.matchesList)
      .map(key => matchesStore.matchesList[key])
      .filter(match => match.date < match.dateEndMatch)
      .map(filteredMatch => JSON.stringify(filteredMatch));
    callback(rows, { allLoaded: true });
  }

  onPress = (rowParsed) => {
    Actions.match({
      match: rowParsed,
    });
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
          {rowParsed.name} - {moment(rowParsed.date).fromNow()}
          <Icon name="chevron-right" size={12} color="#000" /></Text>
      </TouchableHighlight>
    );
  }

  render() {
    const { matchesStore } = this.props;
    return (
      <View style={styles.container}>
        <Text>Running Matches</Text>
        <Text>Matches Ended</Text>
        {matchesStore.matchesList.length !== 0 ?
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

Matches.propTypes = {
  matchesStore: PropTypes.object.isRequired,
};

export default Matches;
