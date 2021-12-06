import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(

  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider

        domain='hrms-frontend.us.auth0.com'
        clientId='zy1HQNuQyoO86P4x3hJLs1qiejMVmOWs'
      //redirectUri='window.location.origin'
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,



  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

