import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Header from '../Header/Header';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import {useHistory} from 'react-router-dom';
import Success from '../Success/Success';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import { useDispatch } from 'react-redux';


function App() {

  const history = useHistory();

  const dispatch = useDispatch();

    //Getting feeling, understanding, support, and commment data from the redux store

  const feeling = useSelector((store) => {
      return store.feeling;
  })

  const understanding = useSelector((store) => {
      return store.understanding;
  })

  const support = useSelector((store) => {
      return store.support;
  })

  const comment = useSelector((store) => {
      return store.comment;
  })

  const input = {
      feeling,
      understanding,
      support, 
      comment,
  };

  console.log('input is', input);


  /*Finding that I don't need a GET request in the app file on page load
    because we are not loading data from the database on page load? */

  useEffect(()=> {
    fetchFeedback();
   }, [])


   /*Axios GET request for feedback from database
    Using this to check sample data in database, but I don't think this 
    is necessary either?*/

    const fetchFeedback = () => {
        console.log('in FetchFeedback function');
        axios({
          method: 'GET', 
          url: '/review'
        })
        .then((response) => {
           console.log('response.data is', response.data);

        })
          .catch((err) => {
            console.log ('error in GET display feedback', err)
        })

    }

          const handleSubmit = (event) => {
            event.preventDefault();

            //Call POST
            saveFeedback(input);

            //clear input
            dispatch({
              type: 'CLEAR_INPUT', 
              payload: {},
            })

            history.push('/success');
            
}

       //Axios POST request to save feedback to the database

       const saveFeedback = (input) => {
        console.log('in saveFeedback POST function, input is', input);

           axios({
             method: 'POST', 
             url: '/review',
             data: input,
           })
           .then((response) => {
             console.log('successfully POSTed feedback, response is', response.data)
             fetchFeedback(response.data);
           })
           .catch((err) => {
             console.log('error in POST feedback', err)
           })

   }
  
  return (
    <Router>
    <div className='App'>

    <Route exact path = '/'>
        <Header />
        <Feeling />
    </Route>
    <Route exact path = '/understanding'>
        <Header />
        <Understanding />
    </Route>
    <Route exact path = '/support'>
        <Header />
        <Support />
    </Route>
    <Route exact path = '/comment'>
        <Header />
        <Comment />
    </Route>
    <Route exact path = '/review'>
        <Review handleSubmit={handleSubmit} feeling = {feeling} 
                 comment = {comment} support={support} understanding={understanding} />
    </Route>
    <Route exact path = '/success'>
        <Success />
    </Route>
    </div>
    </Router>

  );
}

export default App;
