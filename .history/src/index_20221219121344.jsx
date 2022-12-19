import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react';

import App from './App';
import store from './redux/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store>
    <App />
  </Provider>
);



