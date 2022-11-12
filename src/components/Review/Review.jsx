import {React} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button';


function Review({input, saveFeedback}) {

    let history = useHistory();
    let dispatch =useDispatch();

const handleSubmit = (event) => {
        event.preventDefault();
    
        //Call POST
        saveFeedback(input);
    
        history.push('/success');
        
    }

    return (
        <>
        <h1>Review Your Feedback</h1>

        <h2>Feelings: {input.feeling}</h2>
        <h2>Understanding: {input.understanding}</h2>
        <h2>Support: {input.support}</h2>
        <h2>Comments: {input.comment}</h2>

        <Button variant="outlined" type = "submit" onClick={handleSubmit} input={input}>Submit</Button>
        </>
    );
    
}

export default Review;
