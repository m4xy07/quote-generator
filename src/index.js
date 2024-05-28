import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const updateBodyClass = (simpleMode) => {
  document.body.className = simpleMode ? 'simple-mode' : '';
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);