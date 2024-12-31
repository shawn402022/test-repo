window.addEventListener('load', () => {
  document.body.insertAdjacentHTML('beforeend',
    `<div id="startup-log" style="position:fixed;bottom:0;left:0;background:black;color:white;padding:10px;">
      App starting...
    </div>`
  );
});

import { logMessage } from './utils/logger';

logMessage('Starting application initialization...');

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Modal from './components/Context/Modal';
import ModalProvider from './components/Context/ModalContext';
import configureStore from './store/store';
import './index.css';

const store = configureStore();
logMessage('Store configured');

const root = document.getElementById('root');
logMessage(`Root element found: ${Boolean(root)}`);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
        <Modal />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);

logMessage('Render completed');
