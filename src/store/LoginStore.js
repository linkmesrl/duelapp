import { observable, action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class LoginStore {

  @observable logged = false;
  @action login(user, password) {
    return Promise.resolve(FirebaseAPI.login(user, password));
  }
}

export default new LoginStore();
