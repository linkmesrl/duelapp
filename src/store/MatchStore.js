import { observable, action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class MatchStore {
  @observable currentIndex = 0;

  @action setCurrentIndex(index) {
    this.currentIndex = index;
    console.log(this.currentIndex);
  }
}

export default new MatchStore();
