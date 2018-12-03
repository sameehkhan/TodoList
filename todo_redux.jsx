import configureStore from './frontend/store/store';

document.addEventListener("DOMContentLoaded", function(event) {
  window.store = configureStore();
});
