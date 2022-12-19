import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react';

import './index.css';
import App from './App';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);



