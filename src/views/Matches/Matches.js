import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { observer } from 'mobx-react/native';

import GiftedListView from 'react-native-gifted-listview';

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
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(this.props.store.matchesList),
    // });
  }

  onFetch = (page = 1, callback) => {
    const rows = Object.keys(this.props.store.matchesList).map((item) => JSON.stringify(item));
    callback(rows, { allLoaded: true });
  }

  onPress = (rowParsed) => {
    Actions.seasons({
      seasons: rowParsed.seasons,
    });
  }

  renderRowView = (rowData) => {
    const rowParsed = JSON.parse(rowData);
    return (
      <TouchableHighlight
        // style={customStyles.row}
        underlayColor="#c8c7cc"
        onPress={() => this.onPress(rowParsed)}
      >
        <Text>{rowParsed}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    console.log('matchesList', console.log(Object.keys(this.props.store.matchesList)));
    if (this.props.store.matchesList.length === 0) {
      return (
        <Text>Loading...</Text>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Matches</Text>
        <GiftedListView
          rowView={this.renderRowView}
          onFetch={this.onFetch}
          enableEmptySections
          pagination
          refreshable
          withSections={false}
          // customStyles={customStyles}
          refreshableTintColor="blue"
        />
      </View>
    );
  }
}

Matches.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Matches;
