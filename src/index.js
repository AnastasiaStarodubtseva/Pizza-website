import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import './scss/app.scss';
import App from './App';


ReactDOM.render(
  <React.StrictMode >
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/qwe" component={Header} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);