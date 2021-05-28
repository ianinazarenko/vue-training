import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBkDd8jInAoijn7pD61UGEwDK1J9RFz800',
  authDomain: 'udemy-vue-dojo-blog.firebaseapp.com',
  projectId: 'udemy-vue-dojo-blog',
  storageBucket: 'udemy-vue-dojo-blog.appspot.com',
  messagingSenderId: '945164627327',
  appId: '1:945164627327:web:cea26e97fa877f62e87e4a',
}

// Init firebase
firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()

// auth
const auth = firebase.auth()

// Timestapm
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, auth, timestamp }
