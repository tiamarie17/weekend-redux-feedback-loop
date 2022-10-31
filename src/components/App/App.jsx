import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Header from '../Header/Header';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Success from '../Success/Success';
import {useSelector} from 'react-redux';


function App() {

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


  /*Do I need this useEffect here? Didn't feel like it was necessary
  but I added it anyway */

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
        <Review saveFeedback={saveFeedback} input={input} />
    </Route>
    <Route exact path = '/success'>
        <Success />
    </Route>
    </div>
    </Router>

  );
}

export default App;
