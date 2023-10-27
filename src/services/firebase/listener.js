import { getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export default class fireBaseListener {
  setup() {
    this.app = getApp();
    this.db = getDatabase(this.app);
  }
}
