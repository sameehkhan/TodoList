import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import App from './frontend/components/app';

document.addEventListener("DOMContentLoaded", function(event) {
  window.store = configureStore();
});

const Content = document.getElementById('content');
ReactDOM.render(<App/>, Content);
