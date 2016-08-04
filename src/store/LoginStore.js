import { observable, action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class LoginStore {

  @observable logged = false;
  @action login(user, password) {
    return Promise.resolve(FirebaseAPI.login(user, password));
    // .then(() => {
    //   this.logged = true;
    // })
    // .catch((error) => {
    //   // Handle Errors here.
    //   // const errorCode = error.code;
    //   // const errorMessage = error.message;
    //   console.log(error);
    // });
  }
}

export default new LoginStore();
