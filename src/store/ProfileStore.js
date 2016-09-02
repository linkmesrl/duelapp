import { action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class ProfileStore {

  @action saveUserData(user) {
    return Promise.resolve(FirebaseAPI.saveUserData(user, password));
  }
}

export default new ProfileStore();
