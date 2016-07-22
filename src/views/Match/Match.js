import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  exitButton: {
    position: 'absolute',
    top: 30,
    right: 30,
    backgroundColor: 'transparent',
  },
});

@observer
class Match extends Component {
  onChange = (e, state) => {
    if (state.index !== this.props.store.currentIndex) {
      this.props.store.setCurrentIndex(state.index);
    }
  }

  goHome = () => {
    Actions.home({
      type: 'back',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsButtons
          showsPagination={false}
          onMomentumScrollEnd={this.onChange}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <TouchableOpacity style={styles.exitButton} onPress={this.goHome}>
          <Icon name="remove" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

Match.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Match;
