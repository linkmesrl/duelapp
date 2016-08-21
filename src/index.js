import React from 'react';
import { Router, Scene } from 'react-native-mobx';

import Splash from './views/Splash/Splash';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Match from './views/Match/Match';
import Matches from './views/Matches/Matches';

import matchStore from './store/MatchStore';
import matchesStore from './store/MatchesStore';
import loginStore from './store/LoginStore';

const stores = { matchStore, matchesStore, loginStore };

export default () => (
  <Router {...stores}>
    <Scene
      key="splash"
      component={Splash}
      title="Splash"
      initial
    />
    <Scene
      key="login"
      component={Login}
      title="Login"
    />
    <Scene
      key="home"
      component={Home}
      title="Home"
      hideNavBar={false}
    />
    <Scene
      key="match"
      component={Match}
      hideNavBar
    />
    <Scene
      key="matches"
      component={Matches}
      title="Matches"
    />
  </Router>
);
