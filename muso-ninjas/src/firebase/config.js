import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBhqXJlNRNjI6Zz4gJpYI1EjN0SlCmuiug',
  authDomain: 'muso-ninjas-3da95.firebaseapp.com',
  projectId: 'muso-ninjas-3da95',
  storageBucket: 'muso-ninjas-3da95.appspot.com',
  messagingSenderId: '113036586210',
  appId: '1:113036586210:web:c3b260cff9f8c5a70942bb',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const firestore = firebase.firestore()
const auth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, auth, timestamp }
