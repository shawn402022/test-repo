console.log('1. Before imports');

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Modal from './components/Context/Modal';
import ModalProvider from './components/Context/ModalContext';
import configureStore from './store/store';
import './index.css';

console.log('2. After imports');

const store = configureStore();
console.log('3. Store created:', store);

const rootElement = document.getElementById('root');
console.log('4. Root element:', rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <div style={{background: 'red', padding: '20px'}}>
      Mounting Check
    </div>
    <Provider store={store}>
      <ModalProvider>
        <div style={{background: 'purple', padding: '20px'}}>
          React + Redux Working
        </div>
        <Modal />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);

console.log('5. Render called');
