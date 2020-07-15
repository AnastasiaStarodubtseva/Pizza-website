import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import './scss/app.scss';
import App from './App';


ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);