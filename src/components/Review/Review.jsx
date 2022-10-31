import {React} from 'react';


function Review({handleSubmit, feeling, understanding, support, comment}) {


    return (
        <>
        <h1>Review Your Feedback</h1>

        <h2>Feelings: {feeling}</h2>
        <h2>Understanding: {understanding}</h2>
        <h2>Support: {support}</h2>
        <h2>Comments: {comment}</h2>

        <button type = "submit" onClick = {handleSubmit} value>Submit</button>
        </>
    );
}

export default Review;
