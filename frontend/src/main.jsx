import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Modal from './components/Context/Modal';
import ModalProvider from './components/Context/ModalContext';
import configureStore from './store/store';
import './index.css';

const store = configureStore();

// Create root and render application with test component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <div style={{
          background: 'purple',
          color: 'white',
          padding: '50px',
          fontSize: '24px',
          textAlign: 'center'
        }}>
          React is Working!
        </div>
        <Modal />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
