import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { Provider } from 'mobx-react';
import * as store from './app/store/mobex';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
