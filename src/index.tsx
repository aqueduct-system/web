import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';

import App from './App';
import { fetcher } from './api';

import './tailwind.output.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <SWRConfig value={{
        refreshInterval: 0,
        fetcher,
      }}>
        <App />
      </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
