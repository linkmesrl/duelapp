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

}

export default new LoginStore();
