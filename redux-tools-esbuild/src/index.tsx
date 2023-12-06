import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import App from './app/App';
import { store } from './app/state/store';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
