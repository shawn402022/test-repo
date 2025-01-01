console.log('Starting React initialization');

import React from 'react';
import ReactDOM from 'react-dom/client';

try {
  const rootElement = document.getElementById('root');
  console.log('Root element found:', rootElement);

  const reactRoot = ReactDOM.createRoot(rootElement);
  console.log('React root created');

  reactRoot.render(
    <div style={{background: 'blue', color: 'white', padding: '20px'}}>
      React is mounted
    </div>
  );
  console.log('Render called');
} catch (error) {
  console.error('React mount error:', error);
  document.body.innerHTML += `<div style="color: red">React Error: ${error.message}</div>`;
}

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

logMessage('Render completed');
