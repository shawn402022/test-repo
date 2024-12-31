console.log('Starting application initialization...');

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Modal from './components/Context/Modal';
import ModalProvider from './components/Context/ModalContext';
import configureStore from './store/store';
import './index.css';

console.log('Imports completed successfully');

const store = configureStore();
console.log('Store configured');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
        <Modal />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);

console.log('Render completed');
