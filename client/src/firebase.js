import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDjZjpjIIdyUkqT3E8g7-A4TpKRoawUpOc",
  authDomain: "forgetmenot-fce1a.firebaseapp.com",
  databaseURL: "https://forgetmenot-fce1a.firebaseio.com",
  projectId: "forgetmenot-fce1a",
  storageBucket: "forgetmenot-fce1a.appspot.com",
  messagingSenderId: "1071509310399"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;