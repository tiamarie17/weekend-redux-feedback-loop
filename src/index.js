import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const storedFeedback = (state = [], action) => {
    if(action.type === 'DISPLAY_FEEDBACK'){

        return [...state,
            action.payload];
       
   }
    return state;
}

//const feeling


//const understanding


//const support


//const comment



const storeInstance = createStore(
    combineReducers({
        storedFeedback,
        feeling,
        understanding,
        support,
        comment
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
