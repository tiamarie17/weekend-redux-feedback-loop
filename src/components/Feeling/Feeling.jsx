import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const feeling = [feeling, setFeeling] = useState({feeling: 0})


    const submitFeeling= () => {
        console.log('in submitFeeling');


        dispatch({
            type: 'SUBMIT_FEELING',
            payload: {feeling}
        })

        
        history.push('/understanding');
        
    }

    return(
    <>
    <h1>How are you feeling today?</h1>
    
    <label className = "label">Feeling?</label>
    <input required type = "number" min ="1" max = "5" />
    <button type = "submit" onClick = {submitFeeling}>Next</button>
    </>
    
    );
}

export default Feeling;