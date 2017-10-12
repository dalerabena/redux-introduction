import Rebase from 're-base';
import firebase from 'firebase';

var app = firebase.initializeApp({
  
});

const base = Rebase.createClass(app.database());

export default base;