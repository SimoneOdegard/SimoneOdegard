import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

function Entry() {
  return (
    <App />
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);