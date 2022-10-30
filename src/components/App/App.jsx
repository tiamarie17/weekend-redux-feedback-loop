import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



function App() {

    const dispatch = useDispatch();

    //On page load, fetchFeedback
    useEffect(() =>{
      fetchFeedback();
    }, [])


    //Axios GET request for feedback
    const fetchFeedback = () => {
        console.log('in FetchFeedback function');
        axios({
          method: 'GET', 
          url: '/review'
        })
        .then((response) => {
          dispatch ({
            type: 'DISPLAY_FEEDBACK',
            payload: response.data
          })
        })
          .catch((err) => {
            console.log ('error in GET display feedback', err)
        })

    }

    //Axios POST request to save feedback to the database

    const addFeedback = (feedback) => {
      console.log('in add order POST function')
      axios({
        method: 'POST', 
        url: '/review',
        data: feedback
      })
      .then((response) => {
        console.log('successfully POSTed feedback, response is', response)
      })
      .catch((err) => {
        console.log('error POSTing new order', err)
      })
    }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
