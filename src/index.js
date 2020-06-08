import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter store={store}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


