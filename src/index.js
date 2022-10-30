import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const storedFeedback = (state = [], action) => {
    
    switch(action.type){
        case 'DISPLAY_FEEDBACK':
            return action.payload;
        case 'CLEAR_FEEDBACK':
            return {};
        default: return state;
    }
}

const feeling = (state = 0 , action) => {
    if(action.type === 'STORE_FEELING'){
        return action.payload;
   }
    return state;
}

const understanding = (state = 0 , action) => {
    if(action.type === 'STORE_UNDERSTANDING'){
        return action.payload;
   }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        storedFeedback,
        feeling,
        // understanding,
        // support,
        // comment
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
