import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBkDd8jInAoijn7pD61UGEwDK1J9RFz800',
  authDomain: 'udemy-vue-dojo-blog.firebaseapp.com',
  projectId: 'udemy-vue-dojo-blog',
  storageBucket: 'udemy-vue-dojo-blog.appspot.com',
  messagingSenderId: '945164627327',
  appId: '1:945164627327:web:58958d020e725d30e87e4a',
}

// initialize connection to the back-end
firebase.initializeApp(firebaseConfig)

// initialize firestore service
const projectFirestore = firebase.firestore()

// create timestamp function specific to firebase format
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
