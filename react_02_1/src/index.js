import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/scss/index.scss';
import Home from './Home';
import LocalStorage from './LocalStorage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home />
        <LocalStorage />
    </React.StrictMode>
);