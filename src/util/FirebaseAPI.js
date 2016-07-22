import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCcVfb56wd0nb8P6rq3e6BVf5v4lgCcGOc',
  authDomain: 'duel-c2f0b.firebaseapp.com',
  databaseURL: 'https://duel-c2f0b.firebaseio.com',
  storageBucket: 'duel-c2f0b.appspot.com',
};

firebase.initializeApp(config);

export default FirebaseAPI = {
  pushMatches() {
    return firebase.database().ref('matches').push({
      running: true,
      target: {
        paolo: true,
      },
      members: {
        paolo: true,
        daniele: true,
      },
    });
  },

  getMatches() {
    return firebase.database().ref('matches').on('child_added', (data) => data.val());
  },

  login(username, password) {
    return firebase.auth().signInWithEmailAndPassword(username, password);
  },

  getUsers() {
    firebase.database().ref('/users/P2IJNrzKztdhx3ScnQkV6OZQSUr2').once('value').then(function(snapshot) {
      console.log(snapshot.val());
    });
  }

};
