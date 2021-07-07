import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import CompContext222 from './context/CompContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CompContext222>
        <App />
      </CompContext222>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
