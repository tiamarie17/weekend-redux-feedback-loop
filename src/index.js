import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';



const feeling = (state = 0 , action) => {
    switch(action.type){
        case 'STORE_FEELING':
            return Number(action.payload);
        case 'CLEAR_FEELING':
            return '';
   }
    return state;
}

const understanding = (state = 0 , action) => {
    switch(action.type){
        case 'STORE_UNDERSTANDING':
            return Number(action.payload);
        case 'CLEAR_UNDERSTANDING':
            return '';
    
   }
    return state;
}

const support = (state = 0 , action) => {
    switch(action.type){
        case 'STORE_SUPPORT':
            return Number(action.payload);
        case 'CLEAR_SUPPORT':
            return '';
    }
    return state;
}

const comment = (state = '', action) => {
    switch(action.type){
        case 'STORE_COMMENT':
            return action.payload;
        case 'CLEAR_COMMENT':
            return '';
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comment,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
