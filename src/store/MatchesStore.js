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
    // get matches
  }
}

export default new MatchesStore();
