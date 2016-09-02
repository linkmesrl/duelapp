import firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: 'AIzaSyCcVfb56wd0nb8P6rq3e6BVf5v4lgCcGOc',
  authDomain: 'duel-c2f0b.firebaseapp.com',
  databaseURL: 'https://duel-c2f0b.firebaseio.com',
  storageBucket: 'duel-c2f0b.appspot.com',
};

// random number between 11 and 60
const getRandomNumber = () => Math.ceil(Math.random() * 60 + 10);
firebase.initializeApp(config);

export default FirebaseAPI = {
  pushMatch(name = 'New game', members = ['paolo', 'daniele']) {
    // const newPostKey = firebase.database().ref().child('matches').push().key;
    const now = moment().format();
    const endMatch = moment(now).add(getRandomNumber(), 'minutes').format();

    const newMatchKey = firebase.database().ref('matches').push().key;
    const match = {
      id: newMatchKey,
      running: true,
      target: members[0],
      date: now,
      dateEndMatch: endMatch,
      members,
      name,
    };
    const updates = {};
    updates[`/matches/${newMatchKey}`] = match;

    firebase.database().ref().update(updates);

    return firebase.database()
      .ref(`/matches/${newMatchKey}`)
      .once('value');
  },

  getMatches() {
    return firebase.database().ref('/matches').once('value');
      // .then((snapshot) => snapshot.val());
  },

  login(username, password) {
    return firebase.auth().signInWithEmailAndPassword(username, password);
  },

  logout() {
    return firebase.auth().signOut();
  },

  saveCurrentUserToStorage(user) {
    firebase.database().ref('users/' + user.uid).set({
      username: user.displayName || 'nickname',
      email: user.email,
    });
  },

  getCurrentUser() {
    const user = firebase.auth().currentUser;
    return user;
  },

  getUsersList() {
    return firebase.database().ref('/users').once('value');
  },

  saveUserData() {
    // TODO it has to be implemented
    return {};
  },

};
