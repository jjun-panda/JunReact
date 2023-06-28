import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LocalStorage from './LocalStorage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <LocalStorage />
  </React.StrictMode>
);