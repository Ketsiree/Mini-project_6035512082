import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Card1 from './Component/Card1';

ReactDOM.render(

  <React.StrictMode>
    <App />
    <Card1/>
  </React.StrictMode>,
  document.getElementById('root')

);

serviceWorker.unregister();
