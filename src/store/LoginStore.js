import { observable, action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class LoginStore {

  @observable logged = false;
  @action login(user, password) {

    FirebaseAPI.login(user, password)
    .then(() => {
      this.logged = true;
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });


  }


}

export default new LoginStore();
