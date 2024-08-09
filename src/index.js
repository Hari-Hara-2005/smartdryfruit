import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure the path matches where App is located
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Adjust the path based on your directory structure


ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
);
