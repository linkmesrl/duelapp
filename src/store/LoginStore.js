import { observable, action } from 'mobx';
import FirebaseAPI from '../util/FirebaseAPI';

class LoginStore {


  @action login(user, password) {
    console.log('LOGIN');
    // this.isLoading = true;

    FirebaseAPI.login(user, password)
    .then(() => {
      console.log('LOGIN FUNZA');
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error);
    });
  }
}

export default new LoginStore();
