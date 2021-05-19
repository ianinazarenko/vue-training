import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAIRCFn876YGzqcXMLmeYx77kHMDAUi-bM',
  authDomain: 'udemy-ninja-chat-vue2.firebaseapp.com',
  projectId: 'udemy-ninja-chat-vue2',
  storageBucket: 'udemy-ninja-chat-vue2.appspot.com',
  messagingSenderId: '461424870619',
  appId: '1:461424870619:web:018bf4eeff14e12b86f8fe',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
