import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import App from './frontend/components/app';
import Root from './frontend/components/root';
import allTodos from './frontend/reducers/selectors';

const store = configureStore();

document.addEventListener("DOMContentLoaded", function(event) {
  const Content = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, Content);
});

window.store = store; 
