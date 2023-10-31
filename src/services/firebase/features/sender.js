import { getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export default class FireBaseSender {
  setup() {
    this.app = getApp();
    this.db = getDatabase(this.app);
  }

  teardown() {
    this.app = null;
    this.db = null;
  }
}
