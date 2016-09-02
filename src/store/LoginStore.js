import { observable, action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class LoginStore {

  @observable logged = false;
  @action login(user, password) {
    return Promise.resolve(FirebaseAPI.login(user, password));
  }

  @action logout() {
    return Promise.resolve(FirebaseAPI.logout());
  }

  @action saveCurrentUserToStorage(user) {
    return Promise.resolve(FirebaseAPI.saveCurrentUserToStorage(user));
  }

}

export default new LoginStore();
