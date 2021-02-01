import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppState } from 'store';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';
import 'typography/normalize.css';
import 'typography/fonts.css';
import 'typography/common.css';

ReactDOM.render(
  <Router>
    <AppState>
      <App />
    </AppState>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
