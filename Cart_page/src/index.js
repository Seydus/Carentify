// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main.jsx'; // Import main.jsx

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
