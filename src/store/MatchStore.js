import { observable, action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class MatchStore {
  @observable currentIndex = 0;
  @observable usersList = [];

  @action setCurrentIndex(index) {
    this.currentIndex = index;
    console.log(this.currentIndex);
  }

  @action getUsersList() {
    FirebaseAPI.getUsersList()
    .then((users) => {
      this.usersList = users.val();
    });
  }

  @action pushMatch(matchName) {
    return Promise.resolve(FirebaseAPI.pushMatch(matchName, this.usersList));
  }
}

export default new MatchStore();
