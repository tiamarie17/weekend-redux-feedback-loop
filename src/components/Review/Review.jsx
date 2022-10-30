import {React} from 'react';
import {useSelector, useDispatch} from 'react-redux';


function Review({handleSubmit}) {

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

    dispatch({
        type: 'STORE_INPUT',
        payload: input,
    });


    return (
        <>
        <h1>Review Your Feedback</h1>

        <h2>Feelings: {feeling}</h2>
        <h2>Understanding: {understanding}</h2>
        <h2>Support: {support}</h2>
        <h2>Comments: {comment}</h2>

        <button type = "submit" onClick = {handleSubmit} input = {input} value>Submit</button>
        </>
    );
}

export default Review;
