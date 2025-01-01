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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div style={{padding: '20px', color: 'red'}}>Something went wrong mounting the app.</div>;
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ModalProvider>
          <App />
          <Modal />
        </ModalProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

logMessage('Render completed');
