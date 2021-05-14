import firebase from 'firebase'
import firestore from 'firebase/firestore'

// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: 'AIzaSyAC6h5-FJr64kKbLvqj6P5yUoCzQhaSJRA',
//   authDomain: 'udemy-ninja-smoothies-858e2.firebaseapp.com',
//   projectId: 'udemy-ninja-smoothies-858e2',
//   storageBucket: 'udemy-ninja-smoothies-858e2.appspot.com',
//   messagingSenderId: '519119078754',
//   appId: '1:519119078754:web:69f442b5ae1f6f85e4583b',
// }
// // Initialize Firebase
// export default firebase.initializeApp(firebaseConfig)

const firebaseConfig = {
  apiKey: 'AIzaSyAC6h5-FJr64kKbLvqj6P5yUoCzQhaSJRA',
  authDomain: 'udemy-ninja-smoothies-858e2.firebaseapp.com',
  projectId: 'udemy-ninja-smoothies-858e2',
  storageBucket: 'udemy-ninja-smoothies-858e2.appspot.com',
  messagingSenderId: '519119078754',
  appId: '1:519119078754:web:69f442b5ae1f6f85e4583b',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
