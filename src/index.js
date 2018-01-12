import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer  from './reducers'

/**
 * Create gloabal store for App.
 * Const while we doesnt edit store directly
 */
const store = createStore(reducer);

ReactDOM.render(
<Provider store={store} >
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
