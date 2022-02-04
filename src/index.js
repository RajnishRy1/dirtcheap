import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter> ,
  document.getElementById('root')
);

// if ('serviceWorker' in navigator) {
//   // declaring scope manually
//   navigator.serviceWorker.register('/sw.js', {scope: './'}).then(function(registration) {
//     console.log('Service worker registration succeeded:', registration);
//   }, /*catch*/ function(error) {
//     console.log('Service worker registration failed:', error);
//   });
// } else {
//   console.log('Service workers are not supported.');
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
reportWebVitals();
