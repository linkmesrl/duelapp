import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, ListItem, ListView } from 'react-native';
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
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    this.props.store.getMatchesList();
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(this.props.store.matchesList),
    // });
  }
  renderItem = (item) => {
    console.log(item);
    return (
      <ListItem item={item} onPress={() => {}} />
    );
  }

  render() {
    console.log('matchesList', this.props.store.matchesList);
    return (
      <View style={styles.container}>
        <Text>Matches</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem}
          style={styles.listview}
        />

      </View>
    );
  }
}

Matches.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Matches;
