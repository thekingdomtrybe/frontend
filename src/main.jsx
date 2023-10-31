import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from '@/store';
import FirebaseApp from '@/services/firebase/app';
import FireBaseMessageListener from './services/firebase/messages/message_listener';
import FireBaseMessageSender from './services/firebase/messages/message_sender';
import FireBaseMessageControls from './services/firebase/messages/message_controls';
import './index.scss';

const fireBaseApp = new FirebaseApp();
fireBaseApp.initialize();

const fireBaseMessageListener = new FireBaseMessageListener();
fireBaseMessageListener.setup();

const fireBaseMessageSender = new FireBaseMessageSender();
fireBaseMessageSender.setup();

const fireBaseMessageControls = new FireBaseMessageControls();

window.fireBase = {
  app: fireBaseApp,
  messageListener: fireBaseMessageListener,
  messageSender: fireBaseMessageSender,
  messageControls: fireBaseMessageControls,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
