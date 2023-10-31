import { ref, set } from 'firebase/database';
import FireBaseSender from '@/services/firebase/features/sender';

export default class FireBaseMessageSender extends FireBaseSender {
  sendMessage(message) {
    set(ref(this.db, `messages/${message.id}`), message);
  }
}
