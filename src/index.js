import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/helpers/configureStore';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router history={history}>
<Provider store={store}><App /></Provider></Router>, document.getElementById('root'));