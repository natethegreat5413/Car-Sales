import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './reducers/reducer'

import 'bulma/css/bulma.css';
import './styles.scss';

// Step 1: create a Redux store
const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);
