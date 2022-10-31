import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';



const feeling = (state = 0 , action) => {
    if(action.type === 'STORE_FEELING'){
        return Number(action.payload);
   }
    return state;
}

const understanding = (state = 0 , action) => {
    if(action.type === 'STORE_UNDERSTANDING'){
        return Number(action.payload);
   }
    return state;
}

const support = (state = 0 , action) => {
    if(action.type === 'STORE_SUPPORT'){
        return Number(action.payload);
    }
    return state;
}

const comment = (state = '', action) => {
    if(action.type === 'STORE_COMMENT'){
        return (action.payload);
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
