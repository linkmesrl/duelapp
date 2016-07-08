import React from 'react';
import { Actions, Router, Scene } from 'react-native-mobx';

import Home from './views/Home/Home';
import Other from './views/Other/Other';

import HomeStore from './store/HomeStore';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} title="Home" store={HomeStore} initial />
    <Scene key="other" component={Other} title="Other" />
  </Scene>
);

export default () => <Router scenes={scenes} />;
