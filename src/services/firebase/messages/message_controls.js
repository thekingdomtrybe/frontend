import { getApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

export default class FireBaseMessageControls {
  constructor() {
    this.app = getApp();
    this.db = getDatabase(this.app);
  }

  teardown() {
    this.app = null;
    this.db = null;
  }

  pinMessage(message) {
    set(ref(this.db, `messages/${message.id}`), {
      ...message,
      pinned: true,
    });
  }

  unpinMessage(message) {
    set(ref(this.db, `messages/${message.id}`), {
      ...message,
      pinned: false,
    });
  }

  deleteMessage(id) {
    set(ref(this.db, `messages/${id}`), null);
  }

  clearMessages() {
    set(ref(this.db, 'messages'), null);
  }
}
