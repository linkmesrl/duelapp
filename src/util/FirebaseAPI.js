import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCcVfb56wd0nb8P6rq3e6BVf5v4lgCcGOc',
  authDomain: 'duel-c2f0b.firebaseapp.com',
  databaseURL: 'https://duel-c2f0b.firebaseio.com',
  storageBucket: 'duel-c2f0b.appspot.com',
};

firebase.initializeApp(config);

export default FirebaseAPI = {
  pushMatch() {
    const newMatchKey = firebase.database().ref('matches').push().key;
    const matchData = {
      running: true,
      target: {
        paolo: true,
      },
      members: {
        paolo: true,
        daniele: true,
      },
    };
    const updates = {};
    updates[`/matches/${newMatchKey}`] = matchData;
    return firebase.database().ref().update(updates);
  },

  getMatches() {
    return firebase.database().ref('/matches').once('value');
      // .then((snapshot) => snapshot.val());
  },

  login(username, password) {
    return firebase.auth().signInWithEmailAndPassword(username, password);
  },

  getCurrentUser() {
    const user = firebase.auth().currentUser;
    console.log(user);
    return user;
  },

  getUsers() {
    return firebase.database().ref('/users/P2IJNrzKztdhx3ScnQkV6OZQSUr2').once('value')
      .then((snapshot) => {
        console.log(snapshot.val());
      });
  },

};
