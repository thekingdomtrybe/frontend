import { ref, onValue } from 'firebase/database';
import fireBaseListener from './listener';

export default class fireBaseMessageListener extends fireBaseListener {
  listenToMessages(callback) {
    const messagesRef = ref(this.db, 'messages');
    onValue(messagesRef, (snapshot) => {
      const messages = snapshot.val();
      callback(messages);
    });
  }
}
