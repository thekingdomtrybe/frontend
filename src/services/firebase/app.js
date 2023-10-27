import firebase from 'firebase/app';

export default class firebaseApp {
  constructor() {
    this.config = {
      apiKey: 'AIzaSyDO_a0BvZDAmoot2ftaVEhHyjPU-qdzsvQ',
      authDomain: 'thekingdomtrybe.firebaseapp.com',
      projectId: 'thekingdomtrybe',
      storageBucket: 'thekingdomtrybe.appspot.com',
      messagingSenderId: '228631661806',
      appId: '1:228631661806:web:2215cb5ae3e5b67e98b7ff',
      measurementId: 'G-RNJSQ8CYKP',
      databaseURL: 'https://thekingdomtrybe-default-rtdb.firebaseio.com',
    };
  }

  initialize() {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.config);
    }
  }
}
