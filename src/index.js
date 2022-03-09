import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from './lib/middleware';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(createLogger(),ReduxThunk)) );


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </Provider>
  ,document.getElementById('root')
  
  );

