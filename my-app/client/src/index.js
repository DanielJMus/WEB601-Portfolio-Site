import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './Reducers/store';
// import Login from './Components/database/log-in/login-content.js'

ReactDOM.render(
    <Provider store={store}>
        <App />
        {/* <Login/> */}
    </Provider>, 
    document.getElementById('root')
);

// serviceWorker.unregister();
