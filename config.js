import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: 'AIzaSyDYS_8sNethaaig9nyOngRy5ScWWVDCkdU',
  authDomain: 'project-60-fbc23.firebaseapp.com',
  databaseURL: 'https://project-60-fbc23-default-rtdb.firebaseio.com',
  projectId: 'project-60-fbc23',
  storageBucket: 'project-60-fbc23.appspot.com',
  messagingSenderId: '618741971685',
  appId: '1:618741971685:web:0a4151d02b83e7a407f20c',
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();
