import React from 'react';
import { Actions, Router, Scene } from 'react-native-mobx';

import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Match from './views/Match/Match';
import Matches from './views/Matches/Matches';

import MatchStore from './store/MatchStore';
import MatchesStore from './store/MatchesStore';
import LoginStore from './store/LoginStore';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="login"
      component={Login}
      title="Login"
      store={LoginStore}
    />
    <Scene
      key="home"
      component={Home}
      title="Home"
      store={MatchesStore}
      initial
      hideNavBar={false}
    />
    <Scene
      key="match"
      component={Match}
      store={MatchStore}
      hideNavBar
    />
    <Scene
      key="matches"
      component={Matches}
      title="Matches"
      store={MatchesStore}
    />
  </Scene>
);

export default () => <Router scenes={scenes} />;
