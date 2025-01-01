console.log('1. Script starts');

document.addEventListener('DOMContentLoaded', () => {
  console.log('2. DOM loaded');
  const root = document.getElementById('root');
  console.log('3. Root element:', root);
  root.innerHTML = '<div style="padding: 20px; background: red;">React Init Check</div>';
  console.log('4. Added test div');
});

console.log('5. Before imports');

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


console.log('6. After imports');

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
