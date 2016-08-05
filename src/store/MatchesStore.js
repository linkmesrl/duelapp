import { observable, action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class MatchesStore {
  @observable isLoading = false;
  @observable matchesPushed;
  @observable matchesList = [];
  @observable user = {};

  @action getUser() {
    this.user = FirebaseAPI.getCurrentUser();
  }

  @action setUser(user) {
    this.user = user;
  }

  @action pushMatches() {
    this.isLoading = true;

    FirebaseAPI.pushMatches()
      .then(() => {
        this.isLoading = false;
        this.matchesPushed = true;
      })
      .catch((err) => {
        console.log('Error pushing matches: ', err);
        this.isLoading = false;
      });
  }

  @action getMatchesList() {
    this.matchesList = FirebaseAPI.getMatches();
      // .then(res => {
      //   console.log('getMatchesList', res.val());
      //   this.matchesList = res.val();
      // })
      // .catch((err) => {
      //   console.log('Error getting matches: ', err);
      // });
  }
}

export default new MatchesStore();
