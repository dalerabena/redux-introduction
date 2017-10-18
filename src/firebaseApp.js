import C from './constants';
import * as firebase from 'firebase';
import Rebase from 're-base';

firebase.initializeApp(C.firebaseConfig);

firebase.database.enableLogging(function(message) {
  console.log("[FIREBASE]", message);
});

export const base = Rebase.createClass(firebase.database());