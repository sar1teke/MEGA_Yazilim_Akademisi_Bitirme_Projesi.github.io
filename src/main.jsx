import React from 'react';
import { createRoot } from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './style.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);
