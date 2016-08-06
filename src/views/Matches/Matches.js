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

@observer
class Matches extends Component {
  componentDidMount() {
    this.props.store.getMatchesList();
  }

  onFetch = (page = 1, callback) => {
    const rows = Object.keys(this.props.store.matchesList)
      .map(key => this.props.store.matchesList[key])
      .filter(match => match.running)
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
    return (
      <View style={styles.container}>
        {this.props.store.matchesList.length !== 0 ?
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
  store: PropTypes.object.isRequired,
};

export default Matches;
