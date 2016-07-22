import React from 'react';
import { Actions, Router, Scene } from 'react-native-mobx';

import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Matches from './views/Matches/Matches';
import MatchesStore from './store/MatchesStore';
import LoginStore from './store/LoginStore';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} title="Login" store={LoginStore} />
    <Scene key="home" component={Home} title="Home" store={MatchesStore} initial />
    <Scene key="matches" component={Matches} title="Matches" store={MatchesStore} />
  </Scene>
);

export default () => <Router scenes={scenes} />;
