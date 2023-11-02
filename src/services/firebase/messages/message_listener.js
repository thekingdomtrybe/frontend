import { ref, onValue } from 'firebase/database';
import FireBaseListener from '@/services/firebase/features/listener';

export default class FireBaseMessageListener extends FireBaseListener {
  listenToMessages(callback) {
    const messagesRef = ref(this.db, 'messages');
    onValue(messagesRef, (snapshot) => {
      const messages = snapshot.val();
      if (messages) callback(messages);
      else callback([]);
    });
  }
}
